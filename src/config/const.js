import { graphic } from "echarts";

export const lineChart = {
  xAxis: {
    show: true,
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
    axisLabel: {
      color: "#fff",
      fontStyle: "normal",
      fontWeight: 300,
      fontFamily: "Helvetica Neue",
      fontSize: "20px",
      lineHeight: 22,
      padding: [20, 0, 0, 0],
    },
    type: "category",
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)",
        type: "dotted",
        width: 0.8,
      },
    },
  },
  grid: {
    top: 0,
    left: 25,
    right: 25,
    height: 220,
  },
  yAxis: {
    type: "value",
    boundaryGap: false,
    axisLabel: {
      show: false,
    },
    splitLine: { show: false },
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(106, 180, 255, 1)",
          },
          {
            offset: 1,
            color: "rgba(194, 166, 255, 1)",
          },
        ]),
      },
      symbol: "circle",
      symbolSize: 15,
      itemStyle: {
        color: "#fff",
        borderColor: "rgba(119, 179, 255, 1)",
        borderWidth: 3,
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(160, 207, 255, 0.58)",
          },
          {
            offset: 1,
            color: "rgba(160, 207, 255, 0)",
          },
        ]),
      },
    },
  ],
};
export const pieChart = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    width: 260,
    height: 260,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["80%", "100%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(112, 176, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(152, 198, 255, 1)",
              },
            ]),
          },
        },
        {
          value: 500,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(96, 144, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(18, 50, 124, 1)",
              },
            ]),
          },
        },
        {
          value: 1048,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(169, 255, 187, 1)",
              },
              {
                offset: 1,
                color: "rgba(111, 255, 141, 1)",
              },
            ]),
          },
        },
        {
          value: 1048,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 74, 254, 1)",
              },
              {
                offset: 1,
                color: "rgba(128, 165, 255, 1)",
              },
            ]),
          },
        },
        {
          value: 1048,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(197, 164, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(219, 199, 255, 1)",
              },
            ]),
          },
        },
        {
          value: 1048,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(254, 189, 66, 1)",
              },
              {
                offset: 1,
                color: "rgba(239, 215, 171, 1)",
              },
            ]),
          },
        },
      ],
    },
  ],
};
