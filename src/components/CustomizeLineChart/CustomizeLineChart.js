import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function CustomizeLineChart({ data, label, width, height }) {
  const [lineColors, setLineColors] = useState("");
  const [areaColor, setAreaColor] = useState("");

  useEffect(() => {
    var canvas = document.getElementById("line_chart");
    var ctx = canvas.getContext("2d");
    var _areacolor = ctx.createLinearGradient(0, 0, 0, 230);
    _areacolor.addColorStop(0, "#A0CFFF94");
    _areacolor.addColorStop(1, "#A0CFFF00");
    setAreaColor(_areacolor);

    let colorArray = [];
    data?.map((item) => {
      var gradientColor = ctx.createLinearGradient(0, 0, 0, 100);
      gradientColor.addColorStop(0, item.line_color[0]);
      gradientColor.addColorStop(1, item.line_color[1]);
      colorArray.push(gradientColor);
    });
    setLineColors(colorArray);
  }, []);

  const linechartOption = {
    type: "line",
    responsive: false,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    layout: {
      padding: {
        bottom: -20,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
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
          color: label?.map((item, index) => {
            return index + 1 === label.length ? "#75B3FF" : "#fff";
          }),
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
      legend: {
        display: false,
      },
      padding: 0,
      tooltip: {
        // Disable the on-canvas tooltip
        enabled: false,
        backgroundColor: "#627F9D",
        external: (context) => {
          // Tooltip Element
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.innerHTML = "<table></table>";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          // Set caret Position (above, below,no-transform ).As I need above I don't delete that class
          tooltipEl.classList.remove("below", "no-transform");

          const tooltipData = context.tooltip.dataPoints[0];

          // Set HTML & Data
          if (tooltipModel.body) {
            const innerHtml = `<div
            style="
              background: #627f9d;
              padding: 15px;
              border-radius: 10px;
              z-index: 1000;
              position: absolute;
              display: block;
              width: 200px;
            "
          >
            <div
              style="
                display: flex;
                align-items: center;
                padding: 5px 5px 12px 5px;
                border-bottom: 1px solid #ffffff1a;
                overflow: hidden;
              "
            >
              <span
                style="
                  font-family: Helvetica;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 20px;
                  line-height: 29px;
                  color: rgba(255, 255, 255, 0.5);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                ${tooltipData.label}
              </span>
            </div>
            <div
              style="
                padding: 12px 5px 5px 5px;
                font-family: Helvetica;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 29px;
                display: flex;
                align-items: center;
                color: #ffffff;
              "
            >
              <span style="color: #fff; white-space: nowrap"> New Item : </span>
              <span
                style="
                  color: #37ce4a;
                  margin-left: 10px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                ${tooltipData.formattedValue}
              </span>
            </div>
            <div
              style="
                position: absolute;
                left: ${
                  tooltipData.dataIndex === 0
                    ? "8px"
                    : tooltipData.dataIndex + 1 ===
                      tooltipData.dataset.data.length
                    ? "168px"
                    : "92px"
                };
                bottom: -15px;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 15px solid #627f9d;
              "
            ></div>
          </div>`;

            tooltipEl.querySelector("table").innerHTML = innerHtml;
          }

          // Display, position, and set styles for font
          tooltipEl.style.opacity = "1";
          tooltipEl.style.marginLeft =
            tooltipModel.caretX -
            (tooltipData.dataIndex === 0
              ? 20
              : tooltipData.dataIndex + 1 === tooltipData.dataset.data.length
              ? 175
              : 102) +
            "px";
          tooltipEl.style.marginTop = tooltipModel.caretY - 420 + "px";
        },
      },
    },
  };

  const lineChartAction = (data) => {
    const _datasets = data?.map((item, index) => {
      return {
        data: item.value,
        label: "lineChart",
        borderColor: lineColors[index],
        backgroundColor: areaColor,
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
      };
    });

    const linechartData = {
      labels: label?.map((label, id) => {
        return id + 1 === label.length ? "Today" : label;
      }),
      datasets: _datasets,
    };

    return linechartData;
  };

  return (
    <>
      <Line
        id="line_chart"
        type="line"
        width={width}
        height={height}
        options={linechartOption}
        data={lineChartAction(data)}
        plugins={[
          {
            beforeEvent: function (chart, ctx) {
              const event = ctx.event;
              // Take into account CSS zoom on some parent element.
              // Zoom is used, e.g., by Reveal.js.
              var zoom =
                document.getElementsByClassName("websiteContainer")[0].style
                  .zoom || 1;
              if (zoom != 1) {
                event.x = event.x / zoom;
                event.y = event.y / zoom;
              }
            },
          },
        ]}
      />
      <div style={{ position: "relative" }}>
        <div id="chartjs-tooltip">
          <table></table>
        </div>
      </div>
    </>
  );
}

export default CustomizeLineChart;
