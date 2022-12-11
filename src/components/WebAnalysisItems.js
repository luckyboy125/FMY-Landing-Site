import Button from "./Button/Button";
import handImage from "../asset/images/hand.svg";
import "./WebAnalysisItem.css";
import CustomizeLineChart from "./CustomizeLineChart/CustomizeLineChart";
import Stats from "./Stats/Stats";
import TopPlatforms from "./TopPlatforms/TopPlatforms";
import Sentiment from "./Sentiment/Sentiment";
import CustomizePieChart from "./CustomizePieChart/CustomizePieChart";

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
              <div className="descriptionItem borderNone topPaddingNone pdBottom22">
                <div className="descriptionItemTitle">
                  Total items this week
                </div>
                <div className="descriptionItemCount blue fontSize40">
                  10,324
                </div>
              </div>
              <div className="descriptionItem pdTop24 pdBottom28">
                <div className="descriptionItemTitle">
                  Changes from last week
                </div>
                <div className="descriptionItemCount green">+12%</div>
              </div>
              <div className="descriptionItem bottomPaddingNone pdTop22">
                <div className="descriptionItemTitle">Total items in DB</div>
                <div className="descriptionItemCount white">5,403</div>
              </div>
            </div>
            <div className="lineChartRoot">
              <CustomizeLineChart
                axis={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"]}
                ayis={[1320, 932, 901, 1300, 1290, 1330, 1320]}
              />
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
              <CustomizePieChart axis={[100, 120, 124, 300, 145, 50]} />
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
