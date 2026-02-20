import { useEffect, useState, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import type { GradientColor } from "../../helpers/chart.helper";
import "./CustomizeDoughnutChart.css";

Chart.register(...registerables);

export interface CustomizeDoughnutChartProps {
  data?: number[];
  label?: string[];
  colorInfo?: GradientColor[];
  showNumber?: boolean;
}

function CustomizeDoughnutChart({
  data = [],
  label = [],
  colorInfo = [],
  showNumber = false,
}: CustomizeDoughnutChartProps) {
  const [chartColor, setChartColor] = useState<CanvasGradient[]>([]);

  useEffect(() => {
    const canvas = document.getElementById("doughnut_chart") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colorArray: CanvasGradient[] = [];
    colorInfo.forEach((item) => {
      const gradientColor = ctx.createLinearGradient(0, 0, 0, 300);
      gradientColor.addColorStop(0, item.first);
      gradientColor.addColorStop(1, item.last);
      colorArray.push(gradientColor);
    });
    setChartColor(colorArray);
  }, [colorInfo]);

  const DoughnutChartOption = useMemo(
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
            let tooltipEl = document.getElementById("doughnut-chartjs-tooltip");
            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = "doughnut-chartjs-tooltip";
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
            if (tooltipModel.body && tooltipData && colorInfo[tooltipData.dataIndex]) {
              const table = tooltipEl.querySelector("table");
              const c = colorInfo[tooltipData.dataIndex];
              if (table) {
                table.innerHTML = `<div style="padding: 6px 10px 6px 8px; display: flex; align-items: center; justify-content: space-between; background: #ffffff; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 60px;">
                  <div style="display: flex; align-items: center; margin-right: 14px">
                    <div style="min-width: 20px; width: 20px; height: 20px; background: linear-gradient(238.95deg, ${c.first} 31.21%, ${c.last} 62.45%); margin-right: 11px; border-radius: 50%;"></div>
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
    [colorInfo]
  );

  const DoughnutChartAction = useMemo(
    () => ({
      labels: label,
      datasets: [
        {
          label: "My First Dataset",
          data,
          backgroundColor: chartColor,
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    }),
    [data, label, chartColor]
  );

  const plugins = useMemo(
    () => [
      {
        beforeEvent: function (
          _chart: unknown,
          ctx: { event: { x: number; y: number } }
        ) {
          const event = ctx.event;
          const zoom =
            (document.getElementsByClassName("websiteContainer")[0] as HTMLElement)?.style?.zoom || "1";
          const z = Number(zoom);
          if (z !== 1) {
            event.x = event.x / z;
            event.y = event.y / z;
          }
        },
      },
    ],
    []
  );

  return (
    <div
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
        id="doughnut_chart"
        type="doughnut"
        width={266}
        height={266}
        options={DoughnutChartOption}
        data={DoughnutChartAction}
        plugins={plugins}
      />
      {showNumber ? <div className="topPercent">86%</div> : null}
      <div style={{ position: "relative" }}>
        <div id="doughnut-chartjs-tooltip">
          <table />
        </div>
      </div>
    </div>
  );
}

export default CustomizeDoughnutChart;
