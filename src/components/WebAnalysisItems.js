import Button from "./Button/Button";
import "./WebAnalysisItem.css";
import ReactEcharts from "echarts-for-react";
import { gaugeChart, lineChart, pieChart, scatterChart } from "../config/const";
import ChartLayout from "./ChartLayout/ChartLayout";

function WebAnalysisItems() {
  return (
    <div className="webAnalysisRoot">
      <div className="chartContainer">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Database Items</div>
            <div className="chartTools">
              <Button name="Show" content="This Week" className="chartPeriod" />
              <Button content="Compare" type="common" />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Cases</div>
          </div>
        </div>
        <div className="chartContent">
          <div className="databasePart">
            <div className="descriptionRoot">
              <div className="descriptionItem borderNone topPaddingNone pdBottom26">
                <div className="descriptionItemTitle">
                  Total items this week
                </div>
                <div className="descriptionItemCount blue fontSize40">
                  10,324
                </div>
              </div>
              <div className="descriptionItem pdTop28 pdBottom32">
                <div className="descriptionItemTitle">
                  Changes from last week
                </div>
                <div className="descriptionItemCount green">+12%</div>
              </div>
              <div className="descriptionItem bottomPaddingNone pdTop23">
                <div className="descriptionItemTitle">Total items in DB</div>
                <div className="descriptionItemCount white">5,403</div>
              </div>
            </div>
            <div className="lineChartRoot">
              <ReactEcharts
                option={lineChart}
                style={{ width: "100%", height: "280px", marginTop: "50px" }}
              ></ReactEcharts>
            </div>
          </div>
          <div className="casesPart">
            <div className="descriptionRoot">
              <div className="descriptionItem borderNone topPaddingNone">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">53</div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">+2</div>
              </div>
              <div className="descriptionItem bottomPaddingNone">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">Lorem ipsum</div>
              </div>
            </div>
            <div className="pieChartRoot">
              <div className="chartRoot">
                <ReactEcharts
                  option={pieChart}
                  style={{
                    width: "260px",
                    marginRight: "50px",
                  }}
                ></ReactEcharts>
                <div className="pieChartPercent">86%</div>
              </div>
              <div className="pieChartDes">
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgTenderblue"></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgDarkblue"></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgGreen"></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgSmartblue"></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgPink"></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div className="pieChartIcon bgYellow"></div>
                  <div className="pieChartItemName">Opther</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sencondPart">
        <ChartLayout
          name="Stats"
          button={<Button name="Show" content="All" />}
          className="stats"
        >
          <div className="statsItems borderBottom">
            <div className="statsItem borderRight">
              <div className="statsItemCount">1.7k</div>
              <div className="statsItemDes">Flagged posts</div>
              <div className="statsItemPercent">+12%</div>
            </div>
            <div className="statsItem">
              <div className="statsItemCount">1.7k</div>
              <div className="statsItemDes">Flagged posts</div>
              <div className="statsItemPercent">+12%</div>
            </div>
          </div>
          <div className="statsItems">
            <div className="statsItem borderRight">
              <div className="statsItemCount">1.7k</div>
              <div className="statsItemDes">Flagged posts</div>
              <div className="statsItemPercent">+12%</div>
            </div>
            <div className="statsItem">
              <div className="statsItemCount">1.7k</div>
              <div className="statsItemDes">Flagged posts</div>
              <div className="statsItemPercent">+12%</div>
            </div>
          </div>
        </ChartLayout>
        <ChartLayout
          name="Top platforms"
          button={<Button name="Show" content="All" className="hidden" />}
          className="topPlatforms"
        >
          {" "}
          <ReactEcharts option={scatterChart}></ReactEcharts>
        </ChartLayout>
        <ChartLayout
          name="Sentiment"
          button={<Button name="Show" content="This week" />}
          className="topPlatforms"
        >
          <div className="chartRoot">
            <ReactEcharts option={gaugeChart}></ReactEcharts>
            <span className="gaugeMoreDetail">Positive sentiment</span>
            <span className="gaugeDirection negative">Negative</span>
            <span className="gaugeDirection positive">Positive</span>
          </div>
        </ChartLayout>
      </div>
    </div>
  );
}

export default WebAnalysisItems;
