import { graphic } from "echarts";
import icon1 from "../asset/images/facebook.png";
import icon2 from "../asset/images/music.png";
import icon3 from "../asset/images/instegram.png";
import icon4 from "../asset/images/twitter.png";
import icon5 from "../asset/images/reddit.png";

export const lineChart = {
  xAxis: {
    show: true,
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
    axisLabel: {
      color: "#fff",
      fontStyle: "normal",
      fontWeight: 300,
      fontFamily: "Helvetica",
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
  tooltip: {
    trigger: "item",
    backgroundColor: "#627F9D",
    borderColor: "#627F9D",
    borderRadius: 10,
    padding: 10,
    formatter: function (param) {
      var value = param.value;
      var index = param.dataIndex;
      // prettier-ignore
      return '<div style="position:relative;">' +
    '<div style="padding: 5px 5px 12px 5px;border-bottom: 1px solid #ffffff1a;font-family: "Helvetica";font-style: normal;font-weight: 400;font-size: 20px;line-height: 29px;display: flex;align-items: center;color: rgba(255, 255, 255, 0.5);">' +
    "Monday, June 8" +
    "</div>" +
    '<div style="padding: 12px 5px 5px 5px;font-family: "Helvetica Medium";font-style: normal;font-weight: 500;font-size: 20px;line-height: 29px;display: flex; align-items: center; color: #ffffff;">' +
    '<span style="color: #fff;">' +
    "New Item : " +
    "</span>" +
    '<span style="color: #37ce4a;margin-left: 10px;">' +
    value +
    "</span>" +
    "</div>" +
    `<div style="position:absolute; ${index === 0 ? "left: 0; bottom:-30px;":"left: 42%; bottom:-30px;"} width: 0;height: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 20px solid #627F9D;">` +
    "</div>" +
    "</div>";
    },
    position: function (pt, params) {
      console.log("test", pt, params);
      return params.dataIndex === 0
        ? [pt[0] - 20, pt[1] - 130]
        : [pt[0] - 75, pt[1] - 130];
    },
    textStyle: {
      fontSize: "20px",
      fontFamily: "Helvetica",
      lineHeight: "29px",
      fontWeight: 400,
      color: "#FFFFFF80",
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
      radius: ["85%", "100%"],
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

export const scatterChart = {
  xAxis: {
    show: false,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      symbolSize: 107,
      data: [[193.5, 162.5]],
      type: "scatter",
      symbol: "image://url/localhost:3000/facebook.png",
    },
    {
      symbolSize: 97,
      data: [[227.74, 370]],
      type: "scatter",
    },
    {
      symbolSize: 77,
      data: [[370.93, 177.36]],
      type: "scatter",
    },
    {
      symbolSize: 61,
      data: [[458.52, 260.57]],
      type: "scatter",
    },
    {
      symbolSize: 46,
      data: [[482, 161.67]],
      type: "scatter",
    },
  ],
};

export const gaugeChart = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      data: [
        {
          value: 50,
        },
      ],
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [
              1,
              new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(106, 180, 255, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(194, 166, 255, 1)",
                },
              ]),
            ],
          ],
        },
      },
      pointer: {
        itemStyle: {
          color: "#FFFFFF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value} %",
        color: "#fff",
      },
    },
  ],
};
