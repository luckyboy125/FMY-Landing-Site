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

interface SimNode extends BubbleDatum, d3.SimulationNodeDatum {}

function BubbleChart({ data, width, height }: BubbleChartProps): JSX.Element {
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

    const nodeData: SimNode[] = data.map((d) => ({ ...d }));

    const simulation = d3
      .forceSimulation<SimNode>(nodeData)
      .alpha(0.05)
      .velocityDecay(0.7)
      .force('x', d3.forceX().strength(0.01))
      .force('y', d3.forceY().strength(0.8))
      .force(
        'collide',
        d3.forceCollide<SimNode>((d) => scale(d.amount) + 20)
      );

    const cx = width / 2;
    const cy = height / 2;

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

    g.append('circle')
      .attr('class', 'bubble-chart__circle')
      .attr('r', (d) => scale(d.amount));

    const textMaxWidth = (d: SimNode) => (scale(d.amount) * 5) / 3;

    g.append('text')
      .attr('class', 'bubble-chart__label')
      .attr('dy', 6)
      .text((d) => d.category);

    let rafScheduled = false;
    simulation.on('tick', () => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => {
        g.attr(
          'transform',
          (d) => `translate(${cx + (d.x ?? 0)},${cy + (d.y ?? 0)})`
        );
        rafScheduled = false;
      });
    });

    simulation.on('end', () => {
      g.select<SVGTextElement, SimNode>('text').call(
        ellipsizeText,
        textMaxWidth
      );
    });

    simulationRef.current = simulation;

    return () => {
      simulation.stop();
      simulationRef.current = null;
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
