import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts";

function CustomizePieChart({ axis }) {
  const option = {
    legend: {
      show: false,
    },

    tooltip: {
      trigger: "item",
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderRadius: 60,
      padding: 1,
      formatter: function (param) {
        var color = param.color;
        var value = param.data.value;
        var name = param.data.name;
        // prettier-ignore
        return '<div style="padding:6px 10px 6px 8px; display: flex; align-items: center; justify-content: space-between;background: #FFFFFF;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 60px;">'
    +'<div style="display: flex; align-items: center; margin-right:14px;">'
    +`<div style="min-width: 20px; width: 20px; height: 20px; background: linear-gradient(238.95deg, #FEBD42 31.21%, #EFD7AB 62.45%); margin-right: 11px; border-radius: 50%;">`
    +'</div>'
    +'<span style="font-family: Helvetica; font-style: normal;font-weight: 400;font-size: 20px;line-height: 24px;color: #404040;">'
    +"Lorem"
    +'</span>'
    +'</div>'
    +'<span style="font-family: Helvetica; font-style: normal;font-weight: 400;font-size: 20px;line-height: 24px;color: #404040;">'
    +value+"%"
    +'</span>'
    +'</div>';
      },
      position: function (pos, params, dom, rect, size) {
        console.log("test", size);
        return [pos[0], pos[1]];
      },
      textStyle: {
        fontSize: "20px",
        fontFamily: "Helvetica",
        lineHeight: "29px",
        fontWeight: 400,
        color: "#FFFFFF80",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["85%", "100%"],
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
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
            value: axis[0],
            name: "nirr",
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
            value: axis[1],
            name: "nirrr",
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
            value: axis[2],
            name: "nirrr",
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
            value: axis[3],
            name: "nirrr",
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
            value: axis[4],
            name: "nirrd",
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
            value: axis[5],
            name: "nirrrs",
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
  return (
    <div className="chartRoot">
      <ReactEcharts
        option={option}
        style={{
          width: "260px",
          marginRight: "50px",
        }}
      ></ReactEcharts>
      <div className="pieChartPercent">86%</div>
    </div>
  );
}

export default CustomizePieChart;
