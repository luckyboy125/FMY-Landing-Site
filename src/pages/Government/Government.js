import ActionButton from "../../components/ActionButton/ActionButton";
import CustomizeLineChart from "../../components/CustomizeLineChart/CustomizeLineChart";
import ReactWordcloud from "react-wordcloud";
import ActionDropdown from "../../components/ActionDropdown/ActionDropdown";
import BackBtn from "../../components/BackBtn/BackBtn";
import { words } from "./mock.data";
import "./Government.css";
import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import GovernmentCard from "./component/GovernmentCard/GovernmentCard";
import neymar1 from "../../asset/government/neymar1.svg";
import neymar2 from "../../asset/government/neymar2.svg";
import neymar3 from "../../asset/government/neymar3.svg";
import messi1 from "../../asset/government/messi1.svg";
import messi2 from "../../asset/government/messi2.svg";
import messi3 from "../../asset/government/messi3.svg";
import messi4 from "../../asset/government/messi4.svg";
import ronaldo1 from "../../asset/government/ronaldo1.svg";
import ronaldo2 from "../../asset/government/ronaldo2.svg";
import mbappe from "../../asset/government/mbappe.svg";

function Government() {
  const [ran, setRan] = useState();
  const [searchValue, setSearchValue] = useState("");
  const lineChartData = {
    label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [500, 600, 700, 800, 900, 1000, 1200],
  };

  const ramdomSize = () => {
    let letterArray = [];
    words.map((item) => {
      letterArray.push({
        text: item,
        value: Math.floor(Math.random() * 90) + 10,
      });
    });
    setRan(letterArray);
  };

  useEffect(() => {
    ramdomSize();
  }, []);

  return (
    <>
      <div className="governmentRoot">
        <div className="governmentTitle">Government</div>
        <div className="governmentHeaderRoot">
          <BackBtn className="governmentHeaderLink" />
          <ActionDropdown className="governmentHeaderBtn" />
        </div>
        <div className="chartContainer">
          <div className="chartHeader">
            <div className="databasePart">
              <div className="headerItemTitle">General info</div>
              <div className="chartTools">
                <ActionButton
                  name="Show"
                  content="This Week"
                  className="chartPeriod"
                />
                <ActionButton
                  content="Compare"
                  type="common"
                  className="chartCompare"
                />
              </div>
            </div>
            <div className="casesPart">
              <div className="headerItemTitle">Word Cloud</div>
            </div>
          </div>
          <div className="chartContent">
            <div className="databasePart">
              <div className="descriptionRoot">
                <div
                  className="descriptionItem borderNone"
                  style={{
                    paddingTop: "0px !important",
                    paddingBottom: "27px",
                  }}
                >
                  <div className="descriptionItemTitle">Total items</div>
                  <div
                    className="descriptionItemCount"
                    style={{
                      fontSize: "40px",
                      color: "#75b3ff",
                      fontWeight: 400,
                    }}
                  >
                    108
                  </div>
                </div>
                <div
                  className="descriptionItem"
                  style={{ paddingTop: "26px", paddingBottom: "30px" }}
                >
                  <div className="descriptionItemTitle">
                    New items (past 7 days)
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
                  style={{
                    paddingTop: "26px",
                    paddingBottom: "0px !important",
                  }}
                >
                  <div className="descriptionItemTitle">Case open date</div>
                  <div
                    className="descriptionItemCount"
                    style={{ color: "#fff" }}
                  >
                    5,403
                  </div>
                </div>
              </div>
              <div className="lineChartRoot">
                <CustomizeLineChart
                  axis={lineChartData.label}
                  ayis={lineChartData.data}
                />
              </div>
            </div>
            <div className="casesPart">
              <ReactWordcloud
                words={ran}
                options={{
                  colors: ["#fff", "#75B3FF", "#C2A6FF", "#B8B8B8"],
                  enableTooltip: false,
                  deterministic: true,
                  fontFamily: "Helvetica",
                  fontSizes: [0, 60],
                  fontStyle: "normal",
                  fontWeight: "normal",
                  padding: 35,
                  rotations: 2,
                  rotationAngles: [0, 90, -90],
                  scale: "sqrt",
                  spiral: "archimedean",
                  transitionDuration: 1000,
                }}
              />
            </div>
          </div>
        </div>
        <div className="governmentContentRoot">
          <div className="governmentHeader">
            <div className="governmentTitle">Items</div>
            <div className="governmentToolRoot">
              <SearchInput
                action={(e) => setSearchValue(e.target.value)}
                inputValue={searchValue}
                className="governmentSearchTool"
              />
              <FilterDropdown className="governmentSearchTool" type="filter" />
              <FilterDropdown className="governmentSearchTool" />
            </div>
          </div>
          <div class="container governmentContent">
            <div class="row">
              <div className="col governmentContentItemRoot">
                <GovernmentCard
                  imgRoot={<img src={neymar1} alt="neymar" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={neymar3} alt="neymar" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={messi3} alt="messi" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={mbappe} alt="mbappe" />}
                  className="governmentContentItem"
                />
              </div>
              <div className="col governmentContentItemRoot">
                <GovernmentCard
                  imgRoot={<img src={neymar2} alt="neymar" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={messi2} alt="messi" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={messi4} alt="messi" />}
                  className="governmentContentItem"
                />
              </div>
              <div className="col governmentContentItemRoot">
                <GovernmentCard
                  imgRoot={<img src={messi1} alt="messi" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={ronaldo1} alt="ronaldo" />}
                  className="governmentContentItem"
                />
                <GovernmentCard
                  imgRoot={<img src={ronaldo2} alt="ronaldo" />}
                  className="governmentContentItem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Government;
