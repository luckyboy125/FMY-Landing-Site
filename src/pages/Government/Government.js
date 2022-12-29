import ActionButton from "../../components/ActionButton/ActionButton";
import CustomizeLineChart from "../../components/CustomizeLineChart/CustomizeLineChart";
import ReactWordcloud from "react-wordcloud";
import ActionDropdown from "../../components/ActionDropdown/ActionDropdown";
import BackBtn from "../../components/BackBtn/BackBtn";
import { words } from "./mock.data";
import "./Government.css";
import { useEffect, useState } from "react";

function Government() {
  const [ran, setRan] = useState();
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

  console.log("words", ran);

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
                callbacks={{
                  getWordColor: (word) => {
                    const _value = word.value;
                    return _value > 75
                      ? "#fff"
                      : _value > 50
                      ? "#75B3FF"
                      : _value > 25
                      ? "#C2A6FF"
                      : "#B8B8B8";
                  },
                }}
                words={ran}
                options={{
                  rotations: 2,
                  rotationAngles: [-90, 0, 90],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Government;
