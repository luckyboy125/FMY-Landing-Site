import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import "./CustomizeDoughnutChart.css";
Chart.register(...registerables);

function CustomizeDoughnutChart({ data, label, colorInfo }) {
  const [chartColor, setChartColor] = useState([]);

  useEffect(() => {
    var canvas = document.getElementById("line_chart");
    var ctx = canvas.getContext("2d");
    let colorArray = [];

    colorInfo.map((item) => {
      var gradientColor = ctx.createLinearGradient(0, 0, 0, 300);
      gradientColor.addColorStop(0, item.first);
      gradientColor.addColorStop(1, item.last);
      colorArray.push(gradientColor);
    });

    setChartColor(colorArray);
  }, []);

  const DoughnutChartOption = {
    type: "doughnut",
    cutout: "80%",
    radius: 130,
    clip: 0,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -20,
        right: -20,
        top: 0,
        bottom: 0,
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
          let tooltipEl = document.getElementById("doughnut-chartjs-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "doughnut-chartjs-tooltip";
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
              padding: 6px 10px 6px 8px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background: #ffffff;
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 60px;
            "
          >
            <div style="display: flex; align-items: center; margin-right: 14px">
              <div
                style="
                  min-width: 20px;
                  width: 20px;
                  height: 20px;
                  background: linear-gradient(238.95deg, ${
                    colorInfo[tooltipData.dataIndex].first
                  } 31.21%, ${colorInfo[tooltipData.dataIndex].last} 62.45%);
                  margin-right: 11px;
                  border-radius: 50%;
                "
              ></div>
              <span
                style="
                  font-family: Helvetica;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 20px;
                  line-height: 24px;
                  color: #404040;
                  white-space: nowrap;
                "
              >
              ${tooltipData.label}
              </span>
            </div>
            <span
              style="
                font-family: Helvetica;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #404040;
              "
            >
                ${tooltipData.formattedValue}%
            </span>
          </div>
          `;
            tooltipEl.querySelector("table").innerHTML = innerHtml;
          }

          // Display, position, and set styles for font
          tooltipEl.style.opacity = "1";
          tooltipEl.style.marginLeft = tooltipModel.caretX + "px";
          tooltipEl.style.marginTop = tooltipModel.caretY - 260 + "px";
        },
      },
    },
  };

  const DoughnutChartAction = (data) => {
    const DoughnutchartData = {
      labels: label,
      datasets: [
        {
          label: "My First Dataset",
          data: data,
          backgroundColor: chartColor,
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    };

    return DoughnutchartData;
  };

  return (
    <div
      style={{
        maxWidth: "260px",
        maxHeight: "260px",
        marginRight: "44.56px",
        position: "relative",
      }}
    >
      <Doughnut
        id="doughnut_chart"
        type="doughnut"
        width={260}
        options={DoughnutChartOption}
        data={DoughnutChartAction(data, label)}
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
      <div className="topPercent">86%</div>
      <div style={{ position: "relative" }}>
        <div id="doughnut-chartjs-tooltip">
          <table></table>
        </div>
      </div>
    </div>
  );
}

export default CustomizeDoughnutChart;
