import { useEffect, useState, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables, type Plugin } from "chart.js";
import type { GradientColor } from "../../helpers/chart.helper";
import "./CustomizeDoughnutChart.css";

Chart.register(...registerables);

const CHART_CANVAS_ID = "doughnut-chart-canvas";
const CHART_TOOLTIP_ID = "doughnut-chart-tooltip";

export interface CustomizeDoughnutChartProps {
  data?: number[];
  labels?: string[];
  segmentColors?: GradientColor[];
  showCenterValue?: boolean;
}

function CustomizeDoughnutChart({
  data = [],
  labels = [],
  segmentColors = [],
  showCenterValue = false,
}: CustomizeDoughnutChartProps) {
  const [gradients, setGradients] = useState<CanvasGradient[]>([]);

  useEffect(() => {
    const canvas = document.getElementById(CHART_CANVAS_ID) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nextGradients: CanvasGradient[] = [];
    segmentColors.forEach((segment) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, segment.first);
      gradient.addColorStop(1, segment.last);
      nextGradients.push(gradient);
    });
    setGradients(nextGradients);
  }, [segmentColors]);

  const chartOptions = useMemo(
    () => ({
      type: "doughnut" as const,
      cutout: "85.8%",
      radius: 131,
      clip: 0,
      maintainAspectRatio: false,
      layout: {
        padding: { left: -20, right: -20, top: 0, bottom: 0 },
      },
      plugins: {
        legend: { display: false },
        padding: 0,
        tooltip: {
          enabled: false,
          backgroundColor: "#627F9D",
          external: (context: {
            tooltip: {
              opacity: number;
              dataPoints: {
                label: string;
                formattedValue: string;
                dataIndex: number;
              }[];
              caretX: number;
              caretY: number;
            };
          }) => {
            let tooltipEl = document.getElementById(CHART_TOOLTIP_ID);
            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = CHART_TOOLTIP_ID;
              tooltipEl.innerHTML = "<table></table>";
              document.body.appendChild(tooltipEl);
            }
            const tooltipModel = context.tooltip;
            if (tooltipModel.opacity === 0) {
              (tooltipEl as HTMLElement).style.opacity = "0";
              return;
            }
            tooltipEl.classList.remove("below", "no-transform");
            const tooltipData = context.tooltip.dataPoints[0];
            if (tooltipData && segmentColors[tooltipData.dataIndex]) {
              const table = tooltipEl.querySelector("table");
              const segmentColor = segmentColors[tooltipData.dataIndex];
              if (table) {
                table.innerHTML = `<div style="padding: 6px 10px 6px 8px; display: flex; align-items: center; justify-content: space-between; background: #ffffff; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 60px;">
                  <div style="display: flex; align-items: center; margin-right: 14px">
                    <div style="min-width: 20px; width: 20px; height: 20px; background: linear-gradient(238.95deg, ${segmentColor.first} 31.21%, ${segmentColor.last} 62.45%); margin-right: 11px; border-radius: 50%;"></div>
                    <span style="font-family: Helvetica; font-style: normal; font-weight: 400; font-size: 20px; line-height: 24px; color: #404040; white-space: nowrap;">${tooltipData.label}</span>
                  </div>
                  <span style="font-family: Helvetica; font-style: normal; font-weight: 400; font-size: 20px; line-height: 24px; color: #404040;">${tooltipData.formattedValue}%</span>
                </div>`;
              }
            }
            (tooltipEl as HTMLElement).style.opacity = "1";
            (tooltipEl as HTMLElement).style.marginLeft =
              tooltipModel.caretX + "px";
            (tooltipEl as HTMLElement).style.marginTop =
              tooltipModel.caretY - 267 + "px";
          },
        },
      },
    }),
    [segmentColors]
  );

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Dataset",
          data,
          backgroundColor: gradients,
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    }),
    [data, labels, gradients]
  );

  const plugins = useMemo(
    () =>
      [
        {
          id: "doughnutZoomCompensate",
          beforeEvent(
            _chart: unknown,
            args: { event: { x: number | null; y: number | null } }
          ) {
            const event = args.event;
            if (event.x == null || event.y == null) return;
            const zoom =
              (document.getElementsByClassName("websiteContainer")[0] as HTMLElement)?.style?.zoom || "1";
            const z = Number(zoom);
            if (z !== 1) {
              (event as { x: number; y: number }).x = event.x / z;
              (event as { x: number; y: number }).y = event.y / z;
            }
          },
        },
      ] as Plugin<"doughnut", unknown>[],
    []
  );

  return (
    <div
      className="doughnut-chart"
      style={{
        maxWidth: "266px",
        maxHeight: "266px",
        width: "266px",
        height: "266px",
        marginRight: "42.5px",
        position: "relative",
      }}
    >
      <Doughnut
        id={CHART_CANVAS_ID}
        width={266}
        height={266}
        options={chartOptions}
        data={chartData}
        plugins={plugins}
      />
      {showCenterValue ? (
        <div className="doughnut-chart__center-value">86%</div>
      ) : null}
      <div className="doughnut-chart__tooltip-wrap">
        <div id={CHART_TOOLTIP_ID} className="doughnut-chart__tooltip">
          <table />
        </div>
      </div>
    </div>
  );
}

export default CustomizeDoughnutChart;
