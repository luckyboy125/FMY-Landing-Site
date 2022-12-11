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
        enabled: true,
        intersect: true,
        mode: "nearest",
        callbacks: {
          title: () => "title",
          label: (item) => item.parsed + "%",
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
