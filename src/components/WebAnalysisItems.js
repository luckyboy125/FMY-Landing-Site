import Button from "./Button/Button";
import "./WebAnalysisItem.css";
import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts";

function WebAnalysisItems() {
  const option = {
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

  return (
    <div className="webAnalysisRoot">
      <div className="chartContainer">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Database Items</div>
            <div className="chartTools">
              <Button />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Cases</div>
          </div>
        </div>
        <div className="chartContent">
          <div className="databasePart">
            <div className="descriptionRoot">
              <div className="descriptionItem">
                <div className="descriptionItemTitle">
                  Total items this week
                </div>
                <div className="descriptionItemCount blue">10,324</div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">
                  Changes from last week
                </div>
                <div className="descriptionItemCount green">+12.5%</div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Total items in DB</div>
                <div className="descriptionItemCount white">5,403</div>
              </div>
            </div>
            <div className="lineChartRoot">
              <ReactEcharts
                option={option}
                style={{ width: "100%", marginTop: "80px" }}
              ></ReactEcharts>
            </div>
          </div>
          <div className="casesPart"></div>
        </div>
      </div>
    </div>
  );
}

export default WebAnalysisItems;
