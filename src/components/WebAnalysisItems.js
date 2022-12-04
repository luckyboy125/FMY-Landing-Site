import Button from "./Button/Button";
import "./WebAnalysisItem.css";
import ReactEcharts from "echarts-for-react";
import { lineChart, pieChart } from "../config/const";

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
                option={lineChart}
                style={{ width: "100%", marginTop: "80px" }}
              ></ReactEcharts>
            </div>
          </div>
          <div className="casesPart">
            <div className="descriptionRoot">
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">53</div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">+2</div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Lorem ipsum</div>
                <div className="descriptionItemCount white">Lorem ipsum</div>
              </div>
            </div>
            <div className="pieChartRoot">
              <ReactEcharts
                option={pieChart}
                style={{
                  width: "260px",
                  marginRight: "50px",
                }}
              ></ReactEcharts>
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
    </div>
  );
}

export default WebAnalysisItems;
