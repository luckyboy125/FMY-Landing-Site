import ActionButton from "../../components/ActionButton/ActionButton";
import handImage from "../../asset/images/hand.svg";
import "./WebAnalysisItem.css";
import CustomizeLineChart from "../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizePieChart from "../../components/CustomizePieChart/CustomizePieChart";
import Stats from "./component/Stats/Stats";
import TopPlatforms from "./component/TopPlatforms/TopPlatforms";
import Sentiment from "./component/Sentiment/Sentiment";

function WebAnalysisItems() {
  return (
    <div className="webAnalysisRoot">
      <div className="webAnalysisHeader">
        <div>
          <p className="analysisHello">
            Hello, Nimrod <img src={handImage} alt="hand" />
          </p>
          <p className="analysisHeaderDes">
            Here is an overview of the project.
          </p>
        </div>
        <div className="webAnalysisHeaderBtn">Lorem ipsum</div>
      </div>
      <div className="chartContainer">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Database Items</div>
            <div className="chartTools">
              <ActionButton
                name="Show"
                content="This Week"
                className="chartPeriod"
              />
              <ActionButton content="Compare" type="common" />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Cases</div>
          </div>
        </div>
        <div className="chartContent">
          <div className="databasePart">
            <div className="descriptionRoot">
              <div
                className="descriptionItem borderNone"
                style={{ paddingTop: "0px !important", paddingBottom: "27px" }}
              >
                <div className="descriptionItemTitle">
                  Total items this week
                </div>
                <div
                  className="descriptionItemCount"
                  style={{
                    fontSize: "40px",
                    color: "#75b3ff",
                    fontWeight: 400,
                  }}
                >
                  10,324
                </div>
              </div>
              <div
                className="descriptionItem"
                style={{ paddingTop: "24px", paddingBottom: "34px" }}
              >
                <div className="descriptionItemTitle">
                  Changes from last week
                </div>
                <div
                  className="descriptionItemCount"
                  style={{ color: "#0fdf63" }}
                >
                  +12%
                </div>
              </div>
              <div
                className="descriptionItem"
                style={{ paddingTop: "26px", paddingBottom: "0px !important" }}
              >
                <div className="descriptionItemTitle">Total items in DB</div>
                <div className="descriptionItemCount" style={{ color: "#fff" }}>
                  5,403
                </div>
              </div>
            </div>
            <div className="lineChartRoot">
              <CustomizeLineChart
                axis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                ayis={[1320, 932, 901, 1300, 1290, 1330, 1320]}
              />
            </div>
          </div>
          <div className="casesPart">
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
            <div className="pieChartRoot">
              <CustomizePieChart axis={[100, 120, 124, 300, 145, 50]} />
              <div className="pieChartDes">
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#75b3ff" }}
                  ></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#12327c" }}
                  ></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#93eca6" }}
                  ></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#004afe" }}
                  ></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#c6a6ff" }}
                  ></div>
                  <div className="pieChartItemName">Lorem ipsum</div>
                </div>
                <div className="pieChartDesItem">
                  <div
                    className="pieChartIcon"
                    style={{ backgroundColor: "#febd42" }}
                  ></div>
                  <div className="pieChartItemName">Other</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sencondPart">
        <Stats />
        <TopPlatforms />
        <Sentiment value={78} />
      </div>
    </div>
  );
}

export default WebAnalysisItems;
