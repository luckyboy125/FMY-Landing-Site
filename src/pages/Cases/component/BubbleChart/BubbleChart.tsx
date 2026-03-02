import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from 'd3';
import './BubbleChart.css';

const RANGE_MIN = 30;
const RANGE_MAX = 100;

export interface BubbleDatum {
  category: string;
  amount: number;
  link?: string;
}

export interface BubbleChartProps {
  data: BubbleDatum[];
  width: number;
  height: number;
}

type SizeTier = 'small' | 'medium' | 'large';

function radiusScale(value: number, minVal: number, maxVal: number): number {
  return d3.scaleSqrt().range([RANGE_MIN, RANGE_MAX]).domain([minVal, maxVal])(
    value
  );
}

function getSizeTier(radius: number): SizeTier {
  if (radius >= ((RANGE_MAX - RANGE_MIN) / 3) * 2 + RANGE_MIN) return 'large';
  if (radius >= (RANGE_MAX - RANGE_MIN) / 3 + RANGE_MIN) return 'medium';
  return 'small';
}

function ellipsizeText(
  selection: d3.Selection<SVGTextElement, BubbleDatum, SVGGElement, unknown>,
  getMaxWidth: (d: BubbleDatum) => number
): void {
  selection.each(function (this: SVGTextElement, d: BubbleDatum) {
    const textEl = d3.select<SVGTextElement, BubbleDatum>(this);
    const maxWidth = getMaxWidth(d);
    let str = d.category;
    textEl.text(str);
    const bbox = this.getBBox?.();
    if (bbox && bbox.width <= maxWidth) return;
    textEl.text(str + '...');
    while (str.length > 0 && this.getBBox().width > maxWidth) {
      str = str.slice(0, -1);
      textEl.text(str + '...');
    }
  });
}

interface SimNode extends BubbleDatum, d3.SimulationNodeDatum {
  offsetX?: number;
  offsetY?: number;
  targetOffsetX?: number;
  targetOffsetY?: number;
}

const MAX_CLICK_OFFSET = 18;
const OFFSET_EASING = 0.16;
const LINK_BUBBLE_SCALE = 1.08;

function BubbleChart({ data, width, height }: BubbleChartProps) {
  const navigate = useNavigate();
  const containerRef = useRef<SVGGElement>(null);
  const simulationRef = useRef<d3.Simulation<SimNode, undefined> | null>(null);

  useEffect(() => {
    if (!data?.length || !containerRef.current) return;

    const minValue = d3.min(data, (d) => d.amount) ?? 0;
    const maxValue = d3.max(data, (d) => d.amount) ?? 1;
    const scale = (v: number) => radiusScale(v, minValue, maxValue);

    if (simulationRef.current) {
      simulationRef.current.stop();
      simulationRef.current = null;
    }

    const container = d3.select(containerRef.current);
    container.selectAll('*').remove();

    const nodeData: SimNode[] = data.map((d) => ({
      ...d,
      offsetX: 0,
      offsetY: 0,
      targetOffsetX: 0,
      targetOffsetY: 0
    }));

    const cx = width / 2;
    const cy = height / 2;

    const cx = width / 2;
    const cy = height / 2;

    const simulation = d3
      .forceSimulation<SimNode>(nodeData)
      .alpha(0.08)
      .velocityDecay(0.4)
      .force('x', d3.forceX(0).strength(0.03))
      .force('y', d3.forceY(0).strength(0.03))
      .force(
        'charge',
        d3.forceManyBody<SimNode>().strength(-80)
      )
      .force(
        'collide',
        d3.forceCollide<SimNode>((d) => scale(d.amount) + 28)
      );

    const g = container
      .selectAll<SVGGElement, SimNode>('g')
      .data(nodeData)
      .join('g')
      .attr('class', (d) => {
        const r = scale(d.amount);
        const tier = getSizeTier(r);
        const clickable = d.link ? ' bubble-chart__bubble--clickable' : '';
        return `bubble-chart__bubble bubble-chart__bubble--size-${tier}${clickable}`;
      })
      .on('click', (_event, d) => {
        if (d.link) navigate(`/${d.link}`);
      });

    const textMaxWidth = (d: SimNode) => (scale(d.amount) * 5) / 3;

    g.each(function (this: SVGGElement, d, i) {
      const group = d3.select<SVGGElement, SimNode>(this);
      const r = scale(d.amount);
      const content = d.link
        ? group
            .append('g')
            .attr('class', 'bubble-chart__bubble-inner')
            .attr('transform', `scale(${LINK_BUBBLE_SCALE})`)
        : group;
      content
        .append('clipPath')
        .attr('id', `bubble-clip-${i}`)
        .append('circle')
        .attr('r', r);
      content.attr('clip-path', `url(#bubble-clip-${i})`);
      content
        .append('circle')
        .attr('class', 'bubble-chart__circle')
        .attr('r', r);
      content
        .append('text')
        .attr('class', 'bubble-chart__label bubble-chart__label--hidden')
        .attr('dy', 6)
        .text(d.category);
    });

    g.selectAll<SVGTextElement, SimNode>('.bubble-chart__label').call(
      ellipsizeText,
      textMaxWidth
    );

    g.selectAll<SVGTextElement, SimNode>('.bubble-chart__label').classed(
      'bubble-chart__label--hidden',
      false
    );

    const padding = 2;

    const updateTransforms = (updateNodeData: boolean) => {
      g.attr('transform', (d) => {
        const r = scale(d.amount) + padding;
        const minX = r;
        const maxX = width - r;
        const minY = r;
        const maxY = height - r;
        let px = cx + (d.x ?? 0);
        let py = cy + (d.y ?? 0);
        px = Math.max(minX, Math.min(maxX, px));
        py = Math.max(minY, Math.min(maxY, py));

        if (updateNodeData) {
          d.x = px - cx;
          d.y = py - cy;
        }

        const currentOffsetX = d.offsetX ?? 0;
        const currentOffsetY = d.offsetY ?? 0;
        const targetOffsetX = d.targetOffsetX ?? 0;
        const targetOffsetY = d.targetOffsetY ?? 0;

        const easedOffsetX =
          currentOffsetX + (targetOffsetX - currentOffsetX) * OFFSET_EASING;
        const easedOffsetY =
          currentOffsetY + (targetOffsetY - currentOffsetY) * OFFSET_EASING;

        d.offsetX = easedOffsetX;
        d.offsetY = easedOffsetY;

        let finalX = px + easedOffsetX;
        let finalY = py + easedOffsetY;
        finalX = Math.max(minX, Math.min(maxX, finalX));
        finalY = Math.max(minY, Math.min(maxY, finalY));

        return `translate(${finalX},${finalY})`;
      });
    };

    const padding = 2;
    let rafScheduled = false;
    simulation.on('tick', () => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => {
        updateTransforms(true);
        rafScheduled = false;
      });
    });

    simulation.on('end', () => {
      g.selectAll<SVGTextElement, SimNode>('text').call(
        ellipsizeText,
        textMaxWidth
      );
    });

    simulationRef.current = simulation;

    let animationFrameId: number;

    const animateOffsets = () => {
      updateTransforms(false);
      animationFrameId = requestAnimationFrame(animateOffsets);
    };

    animationFrameId = requestAnimationFrame(animateOffsets);

    const svg = containerRef.current.ownerSVGElement;
    if (svg) {
      const onMouseMove = (e: MouseEvent) => {
        const target = e.target as SVGElement | null;
        if (target && target.closest('.bubble-chart__bubble')) {
          return;
        }

        const rect = svg.getBoundingClientRect();
        const scaleX = width / rect.width;
        const scaleY = height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;

        const maxRadius = Math.sqrt(width * width + height * height) / 2;

        nodeData.forEach((node) => {
          const baseX = cx + (node.x ?? 0);
          const baseY = cy + (node.y ?? 0);
          const dx = baseX - mouseX;
          const dy = baseY - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;

          const clampedDist = Math.min(dist, maxRadius);
          const t = 1 - clampedDist / maxRadius;
          const strength = t * t;
          const nx = dx / dist;
          const ny = dy / dist;

          node.targetOffsetX = nx * MAX_CLICK_OFFSET * strength;
          node.targetOffsetY = ny * MAX_CLICK_OFFSET * strength;
        });
      };

      const onMouseLeave = () => {
        nodeData.forEach((node) => {
          node.targetOffsetX = 0;
          node.targetOffsetY = 0;
        });
      };

      svg.addEventListener('mousemove', onMouseMove);
      svg.addEventListener('mouseleave', onMouseLeave);
      return () => {
        simulation.stop();
        simulationRef.current = null;
        cancelAnimationFrame(animationFrameId);
        svg.removeEventListener('mousemove', onMouseMove);
        svg.removeEventListener('mouseleave', onMouseLeave);
      };
    }

    return () => {
      simulation.stop();
      simulationRef.current = null;
      cancelAnimationFrame(animationFrameId);
    };
  }, [data, width, height, navigate]);

  return (
    <svg
      id="bubble_chart"
      className="bubble-chart"
      width={width}
      height={height}
      aria-hidden
    >
      <defs>
        <linearGradient
          spreadMethod="reflect"
          id="smartPurpleGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#5D43FF" />
          <stop offset="98.25%" stopColor="#A5A4FF" />
        </linearGradient>
        <linearGradient
          spreadMethod="reflect"
          id="smartBlueGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#90C2FF" />
          <stop offset="98.25%" stopColor="#60A7FF" />
        </linearGradient>
      </defs>
      <g ref={containerRef} className="bubble-chart__bubbles" />
    </svg>
  );
}

export default BubbleChart;
