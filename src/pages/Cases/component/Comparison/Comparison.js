import { useEffect, useState } from "react";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import CardLayout from "../../../../components/CardLayout/CardLayout";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import {
  comparisonDoughnutChartColorData,
  doughnutChartColorData,
} from "../../../../helpers/chart.helper";
import "./Comparison.css";

function Comparison() {
  const [mockLineData1, setMockLineData1] = useState([]);
  const [mockLineData2, setMockLineData2] = useState([]);
  const [mockLineData3, setMockLineData3] = useState([]);
  const [mockDoughnutData, setMockDoughnutData] = useState([]);

  useEffect(() => {
    setMockLineData1([
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
      Math.floor(Math.random() * 300 + 1200),
    ]);
    setMockLineData2([
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
      Math.floor(Math.random() * 300 + 900),
    ]);
    setMockLineData3([
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
      Math.floor(Math.random() * 300 + 600),
    ]);
    setMockDoughnutData([
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900),
      Math.floor(Math.random() * 500 + 900),
    ]);
  }, []);

  return (
    <>
      <div className="comparisonRoot">
        <div className="comparisonHeader">Government - Services - Army</div>
        <div className="comparisonRoot1">
          <CardLayout
            className="tagOverTimeRoot"
            contentStyle="tagOverTime"
            headerStyle="tagOverTimeHeader"
            header={
              <>
                <div className="title">Case tagging over time</div>
                <ActionButton
                  name="Show"
                  content="Last Week"
                  className="timeTool"
                />
              </>
            }
          >
            <div className="tagOverTimeLineRoot">
              <CustomizeLineChart
                label={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[
                  {
                    line_color: ["#FEBD42", "#EFD7AB"],
                    value: mockLineData1,
                    fill: false,
                  },
                  {
                    line_color: ["#A9FFBB", "#6FFF8D"],
                    value: mockLineData2,
                    fill: false,
                  },
                  {
                    line_color: ["#5D43FF", "#A5A4FF"],
                    value: mockLineData3,
                    fill: false,
                  },
                ]}
                width={714}
                height={280}
              />
            </div>
          </CardLayout>
          <CardLayout
            className="taggingRoot"
            contentStyle="tagging"
            headerStyle="taggingHeader"
            header={
              <>
                <div className="title">Cases tagging</div>
              </>
            }
          >
            <div className="doughnutChartRoot">
              <CustomizeDoughnutChart
                data={mockDoughnutData}
                label={["Government", "Services", "Army"]}
                colorInfo={comparisonDoughnutChartColorData}
              />
              <div className="doughnutChartDes">
                {["Government", "Services", "Army"].map((item, index) => {
                  return (
                    <div className="doughnutChartDesItem" key={index}>
                      <div
                        className="doughnutChartIcon"
                        style={{
                          background: `linear-gradient(238.95deg, ${comparisonDoughnutChartColorData[index]?.first} 31.21%, ${comparisonDoughnutChartColorData[index]?.last} 62.45%)`,
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
      </div>
    </>
  );
}

export default Comparison;
