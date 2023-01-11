import { useState } from "react";
import CardLayout from "../../../../components/CardLayout/CardLayout";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import "./Service.css";

function Service() {
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
        >
          <div className="descriptionRoot">
            <div className="descriptionItem borderNone topPaddingNone">
              <div className="descriptionItemTitle">Lorem ipsum</div>
              <div className="descriptionItemCount" style={{ color: "#fff" }}>
                53
              </div>
            </div>
            <div className="descriptionItem">
              <div className="descriptionItemTitle">Lorem ipsum</div>
              <div className="descriptionItemCount" style={{ color: "#fff" }}>
                +2
              </div>
            </div>
            <div
              className="descriptionItem"
              style={{ paddingBottom: "0px !important" }}
            >
              <div className="descriptionItemTitle">Lorem ipsum</div>
              <div className="descriptionItemCount" style={{ color: "#fff" }}>
                Lorem ipsum
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
      </div>
    </>
  );
}

export default Service;
