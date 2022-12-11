import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef, useState } from "react";
Chart.register(...registerables);

function CustomizeLineChart({}) {
  const [lineColor, setLineColor] = useState("");
  const [areaColor, setAreaColor] = useState("");

  useEffect(() => {
    var canvas = document.getElementById("line_chart");
    var ctx = canvas.getContext("2d");
    var _linecolor = ctx.createLinearGradient(0, 0, 0, 400);
    _linecolor.addColorStop(0, "#6AB4FF");
    _linecolor.addColorStop(1, "#C2A6FF");
    var _areacolor = ctx.createLinearGradient(0, 0, 0, 400);
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
      },
      x: {
        grid: {
          borderDash: [1.6, 1.6],
          borderWidth: 0.8,
          color: "#ffffff",
        },
        ticks: {
          color: "#FFF",
          padding: 20,
          font: "Helcetica",
          fontSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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

  const linechartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
    datasets: [
      {
        data: [1320, 932, 901, 1300, 1290, 1330, 1320],
        label: "lineChart",
        borderColor: lineColor,
        backgroundColor: areaColor,
        width: 3,
        fill: true,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 2.5,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#77B3FF",
      },
    ],
  };

  return (
    <>
      <Line
        id="line_chart"
        type="line"
        width={160}
        height={80}
        options={linechartOption}
        data={linechartData}
      />
    </>
  );
}

export default CustomizeLineChart;
