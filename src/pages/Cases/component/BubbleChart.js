import React from "react";
import { Vega } from "react-vega";

function BubbleChart() {
  const spec = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    width: 1366,
    height: 768,
    padding: { left: 5, right: 5, top: 20, bottom: 0 },
    autosize: "none",
    signals: [
      { name: "cx", update: "width / 2" },
      { name: "cy", update: "height / 2" },
      {
        name: "gravityX",
        value: 0.2,
        bind: { input: "range", min: 0, max: 1 },
      },
      {
        name: "gravityY",
        value: 0.1,
        bind: { input: "range", min: 0, max: 1 },
      },
    ],
    data: [
      {
        name: "table",
        values: [
          { category: "A", amount: 0.28 },
          { category: "B", amount: 0.55 },
          { category: "C", amount: 0.43 },
          { category: "D", amount: 0.91 },
          { category: "E", amount: 0.81 },
          { category: "F", amount: 0.53 },
          { category: "G", amount: 0.19 },
          { category: "H", amount: 0.87 },
          { category: "I", amount: 0.28 },
          { category: "J", amount: 0.55 },
          { category: "K", amount: 0.43 },
          { category: "L", amount: 0.91 },
          { category: "M", amount: 0.81 },
          { category: "N", amount: 0.53 },
          { category: "O", amount: 0.19 },
          { category: "P", amount: 0.87 },
        ],
      },
    ],
    scales: [
      {
        name: "size",
        domain: { data: "table", field: "amount" },
        range: [5000, 20000],
      },
      {
        name: "color",
        type: "ordinal",
        domain: { data: "table", field: "category" },
        range: "ramp",
      },
    ],
    marks: [
      {
        name: "nodes",
        type: "symbol",
        from: { data: "table" },
        encode: {
          enter: {
            fill: { scale: "color", field: "category" },
            xfocus: { signal: "cx" },
            yfocus: { signal: "cy" },
          },
          update: {
            size: { signal: "pow(2 * datum.amount, 2)", scale: "size" },
            stroke: { value: "#fff" },
            strokeWidth: { value: 10 },
            tooltip: { signal: "datum" },
          },
        },
        transform: [
          {
            type: "force",
            iterations: 100,
            static: true,
            forces: [
              {
                force: "collide",
                iterations: 2,
                radius: { expr: "sqrt(datum.size) / 2" },
              },
              { force: "center", x: { signal: "cx" }, y: { signal: "cy" } },
              { force: "x", x: "xfocus", strength: { signal: "gravityX" } },
              { force: "y", y: "yfocus", strength: { signal: "gravityY" } },
            ],
          },
        ],
      },
      {
        type: "text",
        from: { data: "nodes" },
        encode: {
          enter: {
            align: { value: "center" },
            baseline: { value: "middle" },
            fontSize: { value: 15 },
            fontWeight: { value: "bold" },
            fill: { value: "white" },
            text: { field: "datum.category" },
          },
          update: { x: { field: "x" }, y: { field: "y" } },
        },
      },
    ],
  };

  return (
    <>
      <Vega spec={spec} actions={false} />
    </>
  );
}

export default BubbleChart;
