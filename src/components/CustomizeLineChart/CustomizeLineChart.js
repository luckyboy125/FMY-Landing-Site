import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
Chart.register(...registerables);

function CustomizeLineChart({ axis, ayis }) {
  const [lineColor, setLineColor] = useState("");
  const [areaColor, setAreaColor] = useState("");

  useEffect(() => {
    var canvas = document.getElementById("line_chart");
    var ctx = canvas.getContext("2d");
    var _linecolor = ctx.createLinearGradient(0, 0, 0, 100);
    _linecolor.addColorStop(0, "#6AB4FF");
    _linecolor.addColorStop(1, "#C2A6FF");
    var _areacolor = ctx.createLinearGradient(0, 0, 0, 210);
    _areacolor.addColorStop(0, "#A0CFFF94");
    _areacolor.addColorStop(1, "#A0CFFF00");
    setLineColor(_linecolor);
    setAreaColor(_areacolor);
  }, []);

  const linechartOption = {
    type: "line",
    title: {
      display: false,
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
          color: "#FFF",
          padding: 20,
          font: {
            family: "Helvetica",
            size: 20,
            weight: "lighter",
            style: "Light",
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

          // Set HTML & Data
          if (tooltipModel.body) {
            const innerHtml = `<div style=" background: #627F9D; padding: 15px; border-radius:10px; z-index:1000;">
            <div
              style="
                padding: 5px 5px 12px 5px;
                border-bottom: 1px solid #ffffff1a;
                font-family: Helvetica;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 29px;
                display: flex;
                align-items: center;
                color: rgba(255, 255, 255, 0.5);
              "
            >
              Monday, June 8
            </div>
            <div
              style="
                padding: 12px 5px 5px 5px;
                font-family: HelveticaMedium;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 29px;
                display: flex;
                align-items: center;
                color: #ffffff;
              "
            >
              <span style="color: #fff"> New Item : </span>
              <span style="color: #37ce4a; margin-left: 10px"> value </span>
            </div>
            <div
              style="
                position: absolute;
                left: 8px;
                bottom: -15px;
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 15px solid #627f9d;
              "
            ></div>
          </div>
          `;

            tooltipEl.querySelector("table").innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();

          console.log("tootltip: ", position, tooltipModel);

          // Display, position, and set styles for font
          tooltipEl.style.opacity = "1";
          tooltipEl.style.marginLeft =
            position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.marginTop =
            position.top + window.pageYOffset + tooltipModel.caretY + "px";
          tooltipEl.style.padding =
            tooltipModel.padding + "px " + tooltipModel.padding + "px";
          tooltipEl.style.pointerEvents = "none";
        },
      },
    },
  };

  const lineChartAction = (x, y) => {
    const linechartData = {
      labels: x,
      datasets: [
        {
          data: y,
          label: "lineChart",
          borderColor: lineColor,
          backgroundColor: areaColor,
          width: 3,
          fill: true,
          pointStyle: "circle",
          pointRadius: 7.5,
          pointBorderWidth: 2.5,
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#77B3FF",
        },
      ],
    };

    return linechartData;
  };

  return (
    <>
      <Line
        id="line_chart"
        type="line"
        width={637}
        height={250}
        options={linechartOption}
        data={lineChartAction(axis, ayis)}
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
    </>
  );
}

export default CustomizeLineChart;
