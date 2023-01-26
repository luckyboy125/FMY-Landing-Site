import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import ActionTab from "../../components/ActionTab/ActionTab";
import CardLayout from "../../components/CardLayout/CardLayout";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import CustomizeDoughnutChart from "../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import CustomizeLineChart from "../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizeTable from "../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import GradientButton from "../../components/GradientButton/GradientButton";
import RoundButton from "../../components/RoundButton/RoundButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import ThreeDotBtn from "../../components/ThreeDotBtn/ThreeDotBtn";
import { doughnutChartColorData } from "../../helpers/chart.helper";
import refresh from "../../asset/images/refresh_icon.svg";
import more_tool from "../../asset/images/more_tool_icon.svg";
import more_detail from "../../asset/images/more_detail_icon.svg";
import csv from "../../asset/images/csv_icon.svg";
import person3 from "../../asset/person3.svg";
import youtube from "../../asset/images/social/youtube.svg";
import "./Networks.css";

function Networks() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Government", "networkss", "Army"];

  const [searchValue, setSearchValue] = useState("");
  const [mockTableData, setMockTableData] = useState([]);
  const [mockLineData, setMockLineData] = useState([]);
  const [mockDoughnutData, setMockDoughnutData] = useState([]);

  const handleTab = (_tab) => {
    query.set("networks_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          item: "Post",
          user: "Olive Yew",
          addeddate: "June 26, 2022 15:45",
          addbyuser: {
            name: "Nimrod",
            image: person3,
          },
          case: "Lorem ipsum",
          priority: "Medium",
        },
      ]);
    }
    setInterval(() => {
      setMockLineData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
      ]);
      setMockDoughnutData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
      ]);
    }, 3000);
  }, []);

  return (
    <>
      <div className="networksRoot">
        <div className="networksHeaderRoot">
          <div>
            <div className="networksHeaderTitle">Networks</div>
            <ActionTab
              className="networksHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("networks_tab") === null
                  ? tabData[0]
                  : query.get("networks_tab")
              }
            />
          </div>
          <div className="networksHeaderEnd">
            <div className="headerBtn">+ New Network</div>
          </div>
        </div>
        <div className="networksContent">
          <div className="networksContent1">
            <CardLayout
              className="networksChart1Root"
              contentStyle="networksChart1"
              headerStyle="networksChart1Header"
              header={
                <>
                  <div className="headerTitle">Networks</div>
                  <div className="headerContent">Biggest networks</div>
                </>
              }
            >
              <div className="descriptionRoot">
                <div
                  className="descriptionItem"
                  style={{ marginTop: "4px", paddingBottom: "24px" }}
                >
                  <div className="descriptionItemTitle">Total networks</div>
                  <div
                    className="descriptionItemCount"
                    style={{ color: "#0FDF63" }}
                  >
                    630
                  </div>
                </div>
                <div
                  className="descriptionItem"
                  style={{ padding: "28px 0 28px" }}
                >
                  <div className="descriptionItemTitle">
                    New networks (past 7 days)
                  </div>
                  <div
                    className="descriptionItemCount"
                    style={{ color: "#75B3FF" }}
                  >
                    100
                  </div>
                </div>
              </div>
              <div className="doughnutChartRoot">
                <CustomizeDoughnutChart
                  data={mockDoughnutData}
                  label={[
                    "Lorem ipsum",
                    "Lorem ipsum",
                    "Lorem ipsum",
                    "Lorem ipsum",
                    "Lorem ipsum",
                    "Other",
                  ]}
                  colorInfo={doughnutChartColorData}
                />
                <div className="doughnutChartDes">
                  {["first", "second", "third", "fourth", "fifth", "sixth"].map(
                    (item, index) => {
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
                    }
                  )}
                </div>
              </div>
              <RoundButton className="toolRoot" />
            </CardLayout>
            <CardLayout
              className="networksChart2Root"
              contentStyle="networksChart2"
              headerStyle="networksChart2Header"
              header={
                <>
                  <div className="title">Lorem ipsum</div>
                </>
              }
            ></CardLayout>
          </div>
          <CustomizeTable
            className="networksContent2"
            header={
              <div className="networksTableHeader">
                <div className="networksTableTitle">Lorem ipsum dolor</div>
                <SearchInput
                  action={(e) => setSearchValue(e.target.value)}
                  inputValue={searchValue}
                  className="networksTableSearchTool"
                  inputWith
                />
              </div>
            }
            tableHeader={[
              "",
              "Item",
              "User",
              "Added date",
              "Added by",
              "Case",
              "Priority",
              "Screenshot",
              "Link",
              "",
            ]}
            body={mockTableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={youtube} alt="social_icon"></img>
                  </td>
                  <td>{item.item}</td>
                  <td>{item.user}</td>
                  <td>{item.addeddate}</td>
                  <td>
                    <img src={item.addbyuser.image} alt="avatar" />{" "}
                    {item.addbyuser.name}
                  </td>
                  <td>{item.case}</td>
                  <td>
                    <ColorBtn
                      name="Medium"
                      width={130}
                      arrowShow
                      color="#37CE4A"
                    />
                  </td>
                  <td>View</td>
                  <td>Link</td>
                  <td>
                    <ThreeDotBtn className="dotBtn" action={() => {}} />
                  </td>
                </tr>
              );
            })}
          />
        </div>
      </div>
    </>
  );
}

export default Networks;
