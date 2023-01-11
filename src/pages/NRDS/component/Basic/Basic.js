import { useEffect, useState } from "react";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import PlusButton from "../../../../components/PlusButton/PlusButton";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import "./Basic.css";

function Basic() {
  const lineChartData = {
    label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [500, 600, 700, 800, 900, 1000, 1200],
  };

  const doughnutChartData = {
    label: ["a", "b", "c", "d", "e", "f"],
    data: [500, 600, 700, 800, 900, 1000, 1200],
  };
  const [searchValue, setSearchValue] = useState("");
  const [mockTableData, setMockTableData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          domain: "rock.myspace.com",
          addedDate: "June 26, 2022",
          ipaddress: "251.196.63",
          keyword: "Lorem ipsum",
        },
      ]);
    }
  }, []);

  return (
    <>
      <div className="NRDSChart">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Flagged NRD’s</div>
            <div className="chartTools">
              <ActionButton
                name="Show"
                content="Last Week"
                className="chartPeriod"
              />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Keywords</div>
          </div>
        </div>
        <div className="chartContent">
          <div className="databasePart">
            <div className="descriptionRoot">
              <div
                className="descriptionItem"
                style={{
                  paddingBottom: "27px",
                }}
              >
                <div className="descriptionItemTitle">
                  Total NRD’s flagged today
                </div>
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
                  Changes from yesterday
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
                }}
              >
                <div className="descriptionItemTitle">
                  Domains under monitoring
                </div>
                <div className="descriptionItemCount" style={{ color: "#fff" }}>
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
            <div className="descriptionRoot">
              <div className="descriptionItem">
                <div className="descriptionItemTitle">Keywords in use</div>
                <div className="descriptionItemCount" style={{ color: "#fff" }}>
                  53
                </div>
              </div>
              <div className="descriptionItem">
                <div className="descriptionItemTitle">{`New keywords (past 7 days)`}</div>
                <div className="descriptionItemCount" style={{ color: "#fff" }}>
                  +2
                </div>
              </div>
              <div
                className="descriptionItem"
                style={{ paddingBottom: "0px !important" }}
              >
                <div className="descriptionItemTitle">
                  {`Most flagged keyword (past 7 days)`}
                </div>
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
          </div>
        </div>
      </div>
      <CustomizeTable
        className="nrdsTableRoot"
        header={
          <div className="nrdsTableHeader">
            <div className="nrdsTableTitle">NRD’s</div>
            <div className="nrdsTableToolRoot">
              <SearchInput
                action={(e) => setSearchValue(e.target.value)}
                inputValue={searchValue}
                className="nrdsTableSearchTool"
              />
              <FilterDropdown className="nrdsTableSearchTool" type="filter" />
              <FilterDropdown className="nrdsTableSearchTool" />
            </div>
          </div>
        }
        tableHeader={["Domain", "Added Date", "IP Address", "Keyword", ""]}
        body={mockTableData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="firstTd">{item.domain}</td>
              <td className="secondTd">{item.addedDate}</td>
              <td className="thirdTd">{item.ipaddress}</td>
              <td className="fourthTd">{item.keyword}</td>
              <td className="fifthTd">
                <PlusButton
                  content="+ Add to monitoring"
                  action={() => {}}
                  className="addBtn"
                />
                <div className="des">Active</div>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default Basic;
