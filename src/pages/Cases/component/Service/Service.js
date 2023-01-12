import { useState } from "react";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import CardLayout from "../../../../components/CardLayout/CardLayout";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import GradientButton from "../../../../components/GradientButton/GradientButton";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import "./Service.css";

function Service() {
  const lineChartData = {
    label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [1320, 932, 901, 1300, 1290, 1330, 1320],
  };

  const doughnutChartData = {
    label: ["first", "second", "third", "fourth", "fifth", "sixth"],
    data: [100, 120, 124, 300, 145, 50],
  };
  return (
    <>
      <div className="serviceRoot1">
        <CardLayout
          className="relativeServiceRoot"
          contentStyle="relativeService"
          headerStyle="relativeServiceHeader"
          header={
            <>
              <GradientButton content="Service" />
              <div className="headerContent">Related cases</div>
            </>
          }
        >
          <div className="descriptionRoot">
            <div
              className="descriptionItem"
              style={{ marginTop: "4px", paddingBottom: "24px" }}
            >
              <div className="descriptionItemTitle">Total items</div>
              <div
                className="descriptionItemCount"
                style={{ color: "#0FDF63" }}
              >
                630
              </div>
            </div>
            <div className="descriptionItem" style={{ padding: "28px 0 28px" }}>
              <div className="descriptionItemTitle">
                New items (past 7 days)
              </div>
              <div
                className="descriptionItemCount"
                style={{ color: "#75B3FF" }}
              >
                100
              </div>
            </div>
            <div className="descriptionItem" style={{ paddingTop: "31px" }}>
              <div className="descriptionItemTitle">Added date</div>
              <div className="descriptionItemCount" style={{ color: "#fff" }}>
                17 Nov 2022
              </div>
            </div>
          </div>
          <div className="doughnutChartRoot">
            <CustomizeDoughnutChart
              data={doughnutChartData.data}
              label={doughnutChartData.label}
              colorInfo={doughnutChartColorData}
            />
            <div className="doughnutChartDes">
              {doughnutChartData.label.map((item, index) => {
                return (
                  <div className="doughnutChartDesItem" key={index}>
                    <div
                      className="doughnutChartIcon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`,
                      }}
                    ></div>
                    <div className="doughnutChartItemName">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardLayout>
        <CardLayout
          className="tagOverTimeRoot"
          contentStyle="tagOverTime"
          headerStyle="tagOverTimeHeader"
          header={
            <>
              <div className="title">Case tagging over time</div>
              <ActionButton name="Show" content="Last Week" className="" />
            </>
          }
        >
          <div className="tagOverTimeLineRoot">
            <CustomizeLineChart
              axis={lineChartData.label}
              ayis={lineChartData.data}
              width={628}
              height={100}
            />
          </div>
        </CardLayout>
      </div>
    </>
  );
}

export default Service;
