import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as d3 from "d3";

const RANGE_MIN = 30;
const RANGE_MAX = 100;

function radiusScale(value, minVal, maxVal) {
  return d3
    .scaleSqrt()
    .range([RANGE_MIN, RANGE_MAX])
    .domain([minVal, maxVal])(value);
}

function getFill(radius) {
  if (radius >= ((RANGE_MAX - RANGE_MIN) / 3) * 2 + RANGE_MIN)
    return "url(#smartBlueGradient)";
  if (radius >= (RANGE_MAX - RANGE_MIN) / 3 + RANGE_MIN)
    return "url(#smartPurpleGradient)";
  return "#fff";
}

function getFontSize(radius) {
  if (radius >= ((RANGE_MAX - RANGE_MIN) / 3) * 2 + RANGE_MIN) return "30px";
  if (radius >= (RANGE_MAX - RANGE_MIN) / 3 + RANGE_MIN) return "23px";
  return "16px";
}

function getTextColor(radius) {
  return radius >= (RANGE_MAX - RANGE_MIN) / 3 + RANGE_MIN ? "#fff" : "#000";
}

function ellipsizeText(selection, getMaxWidth) {
  selection.each(function (d) {
    const textEl = d3.select(this);
    const maxWidth = getMaxWidth(d);
    let str = d.category;
    textEl.text(str);
    if (this.getBBox?.().width <= maxWidth) return;
    textEl.text(str + "...");
    while (str.length > 0 && this.getBBox().width > maxWidth) {
      str = str.slice(0, -1);
      textEl.text(str + "...");
    }
  });
}

function BubbleChart({ data, width, height }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const simulationRef = useRef(null);

  useEffect(() => {
    if (!data?.length || !containerRef.current) return;

    const minValue = d3.min(data, (d) => d.amount);
    const maxValue = d3.max(data, (d) => d.amount);
    const scale = (v) => radiusScale(v, minValue, maxValue);

    if (simulationRef.current) {
      simulationRef.current.stop();
      simulationRef.current = null;
    }

    const container = d3.select(containerRef.current);
    container.selectAll("*").remove();

    const nodeData = data.map((d) => ({ ...d }));

    const simulation = d3
      .forceSimulation(nodeData)
      .alpha(0.05)
      .velocityDecay(0.7)
      .force("x", d3.forceX().strength(0.01))
      .force("y", d3.forceY().strength(0.8))
      .force(
        "collide",
        d3.forceCollide((d) => scale(d.amount) + 20)
      );

    const g = container
      .selectAll("g")
      .data(nodeData)
      .join("g")
      .attr("cursor", (d) => (d.link ? "pointer" : "default"))
      .attr(
        "filter",
        (d) =>
          d.link ? "drop-shadow(rgba(117, 179, 255, 1) 0px 0px 10px)" : null
      )
      .on("click", (event, d) => {
        if (d.link) navigate(`/${d.link}`);
      });

    g.append("circle")
      .attr("r", (d) => scale(d.amount))
      .attr("fill", (d) => getFill(scale(d.amount)));

    const textMaxWidth = (d) => (scale(d.amount) * 5) / 3;

    g.append("text")
      .attr("dy", 6)
      .attr("fill", (d) => getTextColor(scale(d.amount)))
      .attr("class", "dotme")
      .attr("text-anchor", "middle")
      .attr("font-size", (d) => getFontSize(scale(d.amount)))
      .attr("font-weight", 400)
      .attr("font-family", "Helvetica")
      .text((d) => d.category);

    simulation.on("tick", () => {
      g.attr(
        "transform",
        (d) => `translate(${width / 2 + d.x},${height / 2 + d.y})`
      );
    });

    simulation.on("end", () => {
      g.select("text").call(ellipsizeText, textMaxWidth);
    });

    simulationRef.current = simulation;

    return () => {
      simulation.stop();
      simulationRef.current = null;
    };
  }, [data, width, height, navigate]);

  return (
    <svg id="bubble_chart" width={width} height={height}>
      <linearGradient
        spreadMethod="reflect"
        id="smartPurpleGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
        fr="10%"
      >
        <stop offset="0%" stopColor="#5D43FF" />
        <stop offset="98.25%" stopColor="#A5A4FF" />
      </linearGradient>
      <linearGradient
        spreadMethod="reflect"
        id="smartBlueGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
        fr="10%"
      >
        <stop offset="0%" stopColor="#90C2FF" />
        <stop offset="98.25%" stopColor="#60A7FF" />
      </linearGradient>
      <g ref={containerRef} />
    </svg>
  );
}

export default BubbleChart;
