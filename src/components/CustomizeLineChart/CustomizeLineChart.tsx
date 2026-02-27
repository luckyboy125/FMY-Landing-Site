import { useEffect, useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, type Plugin } from "chart.js";

Chart.register(...registerables);

const LINE_CHART_CANVAS_ID = "line-chart-canvas";
const LINE_CHART_TOOLTIP_ID = "line-chart-tooltip";

export interface LineChartSeries {
  value: number[];
  lineColor: [string, string];
  fill?: boolean;
}

export interface CustomizeLineChartProps {
  data?: LineChartSeries[];
  labels?: string[];
  width?: number;
  height?: number;
}

function CustomizeLineChart({
  data,
  labels,
  width,
  height,
}: CustomizeLineChartProps) {
  const [lineGradients, setLineGradients] = useState<
    CanvasGradient | (CanvasGradient | null)[]
  >([]);
  const [areaGradient, setAreaGradient] = useState<CanvasGradient | "">("");

  useEffect(() => {
    const canvas = document.getElementById(LINE_CHART_CANVAS_ID) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 230);
    gradient.addColorStop(0, "#A0CFFF94");
    gradient.addColorStop(1, "#A0CFFF00");
    setAreaGradient(gradient);

    const gradients: CanvasGradient[] = [];
    data?.forEach((series) => {
      const lineGradient = ctx.createLinearGradient(0, 0, 0, 100);
      lineGradient.addColorStop(0, series.lineColor[0]);
      lineGradient.addColorStop(1, series.lineColor[1]);
      gradients.push(lineGradient);
    });
    setLineGradients(gradients);
  }, [data]);

  const chartOptions = useMemo(
    () => ({
      type: "line" as const,
      responsive: false,
      maintainAspectRatio: false,
      layout: {
        padding: { bottom: -20 },
      },
      scales: {
        y: { display: false, beginAtZero: true },
        x: {
          grid: {
            lineWidth: 0.8,
            color: "#ffffff20",
            drawBorder: false,
            drawOnChartArea: true,
            borderDash: [1.6, 1.6],
            borderDashOffset: 25,
            tickLength: 0,
          },
          ticks: {
            color: labels?.map((_, index) =>
              index + 1 === labels?.length ? "#75B3FF" : "#fff"
            ),
            padding: 20,
            font: {
              family: "Helvetica",
              size: 20,
              weight: "lighter" as const,
              lineHeight: "22px",
            },
          },
        },
      },
      plugins: {
        legend: { display: false },
        padding: 0,
        tooltip: {
          enabled: false,
          backgroundColor: "#627F9D",
          external: (context: { tooltip: { opacity: number; dataPoints: { label: string; formattedValue: string; dataIndex: number; dataset: { data: unknown[] } }[]; caretX: number; caretY: number } }) => {
            let tooltipEl = document.getElementById(LINE_CHART_TOOLTIP_ID);
            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = LINE_CHART_TOOLTIP_ID;
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
            if (tooltipData) {
              const table = tooltipEl.querySelector("table");
              if (table) {
                const tooltipContent = `<div style="background: #627f9d; padding: 15px; border-radius: 10px; z-index: 1000; position: absolute; display: block; width: 200px;">
                  <div style="display: flex; align-items: center; padding: 5px 5px 12px 5px; border-bottom: 1px solid #ffffff1a; overflow: hidden;">
                    <span style="font-family: Helvetica; font-style: normal; font-weight: 400; font-size: 20px; line-height: 29px; color: rgba(255, 255, 255, 0.5); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tooltipData.label}</span>
                  </div>
                  <div style="padding: 12px 5px 5px 5px; font-family: Helvetica; font-style: normal; font-weight: 500; font-size: 20px; line-height: 29px; display: flex; align-items: center; color: #ffffff;">
                    <span style="color: #fff; white-space: nowrap"> New Item : </span>
                    <span style="color: #37ce4a; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tooltipData.formattedValue}</span>
                  </div>
                  <div style="position: absolute; left: ${tooltipData.dataIndex === 0 ? "8px" : tooltipData.dataIndex + 1 === tooltipData.dataset.data.length ? "168px" : "92px"}; bottom: -15px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid #627f9d;"></div>
                </div>`;
                table.innerHTML = tooltipContent;
              }
            }
            (tooltipEl as HTMLElement).style.opacity = "1";
            (tooltipEl as HTMLElement).style.marginLeft =
              tooltipModel.caretX -
              (tooltipData?.dataIndex === 0
                ? 20
                : tooltipData && tooltipData.dataIndex + 1 === tooltipData.dataset.data.length
                ? 175
                : 102) +
              "px";
            (tooltipEl as HTMLElement).style.marginTop =
              tooltipModel.caretY - 420 + "px";
          },
        },
      },
    }),
    [labels]
  );

  const chartData = useMemo(() => {
    const gradientList = Array.isArray(lineGradients) ? lineGradients : [];
    const datasets =
      data?.map((series, index) => ({
        data: series.value,
        label: "series",
        borderColor: gradientList[index] ?? undefined,
        backgroundColor: areaGradient || undefined,
        width: 3,
        fill: series.fill,
        pointStyle: "circle",
        pointHitRadius: 50,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 3.5,
        pointRadius: 7.5,
        pointBorderWidth: 2.5,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#77B3FF",
      })) ?? [];

    return {
      labels: labels?.map((l, id) =>
        id + 1 === labels?.length ? "Today" : l
      ) ?? [],
      datasets,
    };
  }, [data, labels, lineGradients, areaGradient]);

  const plugins = useMemo(
    () =>
      [
        {
          id: "lineChartZoomCompensate",
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
      ] as Plugin<"line", unknown>[],
    []
  );

  return (
    <>
      <Line
        id={LINE_CHART_CANVAS_ID}
        width={width}
        height={height}
        options={chartOptions}
        data={chartData}
        plugins={plugins}
      />
      <div style={{ position: "relative" }}>
        <div id={LINE_CHART_TOOLTIP_ID}>
          <table />
        </div>
      </div>
    </>
  );
}

export default CustomizeLineChart;
