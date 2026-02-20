import { useEffect, useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export interface LineChartDataItem {
  value: number[];
  line_color: [string, string];
  fill?: boolean;
}

export interface CustomizeLineChartProps {
  data?: LineChartDataItem[];
  label?: string[];
  width?: number;
  height?: number;
}

function CustomizeLineChart({
  data,
  label,
  width,
  height,
}: CustomizeLineChartProps) {
  const [lineColors, setLineColors] = useState<
    CanvasGradient | (CanvasGradient | null)[]
  >([]);
  const [areaColor, setAreaColor] = useState<CanvasGradient | "">("");

  useEffect(() => {
    const canvas = document.getElementById("line_chart") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const _areacolor = ctx.createLinearGradient(0, 0, 0, 230);
    _areacolor.addColorStop(0, "#A0CFFF94");
    _areacolor.addColorStop(1, "#A0CFFF00");
    setAreaColor(_areacolor);

    const colorArray: CanvasGradient[] = [];
    data?.forEach((item) => {
      const gradientColor = ctx.createLinearGradient(0, 0, 0, 100);
      gradientColor.addColorStop(0, item.line_color[0]);
      gradientColor.addColorStop(1, item.line_color[1]);
      colorArray.push(gradientColor);
    });
    setLineColors(colorArray);
  }, [data]);

  const linechartOption = useMemo(
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
            color: label?.map((_, index) =>
              index + 1 === label?.length ? "#75B3FF" : "#fff"
            ),
            padding: 20,
            font: {
              family: "Helvetica",
              size: 20,
              weight: "lighter",
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
            let tooltipEl = document.getElementById("chartjs-tooltip");
            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = "chartjs-tooltip";
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
            if (tooltipModel.body && tooltipData) {
              const table = tooltipEl.querySelector("table");
              if (table) {
                const innerHtml = `<div style="background: #627f9d; padding: 15px; border-radius: 10px; z-index: 1000; position: absolute; display: block; width: 200px;">
                  <div style="display: flex; align-items: center; padding: 5px 5px 12px 5px; border-bottom: 1px solid #ffffff1a; overflow: hidden;">
                    <span style="font-family: Helvetica; font-style: normal; font-weight: 400; font-size: 20px; line-height: 29px; color: rgba(255, 255, 255, 0.5); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tooltipData.label}</span>
                  </div>
                  <div style="padding: 12px 5px 5px 5px; font-family: Helvetica; font-style: normal; font-weight: 500; font-size: 20px; line-height: 29px; display: flex; align-items: center; color: #ffffff;">
                    <span style="color: #fff; white-space: nowrap"> New Item : </span>
                    <span style="color: #37ce4a; margin-left: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${tooltipData.formattedValue}</span>
                  </div>
                  <div style="position: absolute; left: ${tooltipData.dataIndex === 0 ? "8px" : tooltipData.dataIndex + 1 === tooltipData.dataset.data.length ? "168px" : "92px"}; bottom: -15px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid #627f9d;"></div>
                </div>`;
                table.innerHTML = innerHtml;
              }
            }
            (tooltipEl as HTMLElement).style.opacity = "1";
            (tooltipEl as HTMLElement).style.marginLeft =
              tooltipModel.caretX -
              (tooltipData.dataIndex === 0
                ? 20
                : tooltipData.dataIndex + 1 === tooltipData.dataset.data.length
                ? 175
                : 102) +
              "px";
            (tooltipEl as HTMLElement).style.marginTop =
              tooltipModel.caretY - 420 + "px";
          },
        },
      },
    }),
    [label]
  );

  const linechartData = useMemo(() => {
    const lineColorsArr = Array.isArray(lineColors) ? lineColors : [];
    const _datasets =
      data?.map((item, index) => ({
        data: item.value,
        label: "lineChart",
        borderColor: lineColorsArr[index] ?? undefined,
        backgroundColor: areaColor || undefined,
        width: 3,
        fill: item.fill,
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
      labels: label?.map((l, id) =>
        id + 1 === label?.length ? "Today" : l
      ) ?? [],
      datasets: _datasets,
    };
  }, [data, label, lineColors, areaColor]);

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
    <>
      <Line
        id="line_chart"
        type="line"
        width={width}
        height={height}
        options={linechartOption}
        data={linechartData}
        plugins={plugins}
      />
      <div style={{ position: "relative" }}>
        <div id="chartjs-tooltip">
          <table />
        </div>
      </div>
    </>
  );
}

export default CustomizeLineChart;
