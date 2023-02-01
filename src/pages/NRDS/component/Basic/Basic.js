import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import PlusButton from "../../../../components/PlusButton/PlusButton";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import ModalLayout from "../../../../components/ModalLayout/ModalLayout";
import ActionButton from "../../../../components/ActionButton/ActionButton";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import CustomizeLineChart from "../../../../components/CustomizeLineChart/CustomizeLineChart";
import CustomizeDoughnutChart from "../../../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import person3 from "../../../../asset/person3.svg";
import closeIcon from "../../../../asset/images/close_icon.svg";
import "./Basic.css";

function Basic() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const chartPeriodDropdown = ["Last week", "Last week", "Last week", "Custom"];
  const nrdsTableSearchToolDropdown = ["Lorem", "Lorem", "Lorem", "Lorem"];

  const doughnutChartData = {
    label: ["a", "b", "c", "d", "e", "f"],
    data: [500, 600, 700, 800, 900, 1000, 1200],
  };
  const [searchValue, setSearchValue] = useState("");
  const [commentArea, setCommentArea] = useState("");
  const [mockTableData, setMockTableData] = useState([]);

  const handleViewModal = (index) => {
    query.set("tableviewmodal_show", index);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const handleViewModalClose = () => {
    query.delete("tableviewmodal_show");
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
                dropRootStyle="chartPeriodDropdownRoot"
                dropRoot={
                  <>
                    {chartPeriodDropdown?.map((item, index) => {
                      return (
                        <div key={index} className="item">
                          {item}
                        </div>
                      );
                    })}
                  </>
                }
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
                label={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[
                  {
                    line_color: ["#6AB4FF", "#C2A6FF"],
                    value: [1000, 1232, 1322, 900, 1488, 800, 1100],
                    fill: true,
                  },
                ]}
                width={721}
                height={275}
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
                showNumber
              />
              <div className="doughnutChartDes">
                {doughnutChartData.label?.map((item, index) => {
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
              <FilterDropdown
                className="nrdsTableSearchTool"
                type="filter"
                dropRootStyle="nrdsTableSearchToolDropdown"
                dropRoot={
                  <>
                    {nrdsTableSearchToolDropdown?.map((item, index) => {
                      return (
                        <div key={index} className="item">
                          {item}
                        </div>
                      );
                    })}
                  </>
                }
              />
              <FilterDropdown
                className="nrdsTableSearchTool"
                dropRootStyle="nrdsTableSearchToolDropdown"
                dropRoot={
                  <>
                    {nrdsTableSearchToolDropdown?.map((item, index) => {
                      return (
                        <div key={index} className="item">
                          {item}
                        </div>
                      );
                    })}
                  </>
                }
              />
            </div>
          </div>
        }
        tableHeader={["Domain", "Added Date", "IP Address", "Keyword", ""]}
        body={mockTableData?.map((item, index) => {
          return (
            <tr key={index}>
              <td className="firstTd" onClick={() => handleViewModal(index)}>
                {item.domain}
              </td>
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
      <ModalLayout
        show={query.get("tableviewmodal_show")}
        onClose={handleViewModalClose}
        className="tabelDomainModalRoot"
      >
        <ThreeDotBtn className="dotBtn" action={() => {}} />
        <img src={closeIcon} alt="closIcon" onClick={handleViewModalClose} />
        <div className="mainRoot">
          <div className="leftPart">+</div>
          <div className="divLinePart"></div>
          <div className="rightPart">
            <div className="title">General info:</div>
            <div className="rightPart1">
              <div className="item">Upload date:</div>
              <div className="item">Username:</div>
            </div>
            <div className="casesPart">
              <div className="title">Cases</div>
              <div className="desRoot">
                <img src={person3} alt="avatart" />
                <div className="desRoot1">
                  <div className="desContent">
                    <div className="des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque cras felis interdum tempor, lobortis egestas
                      volutpat consectetur.....
                    </div>
                    <div className="desDate">Feb 6, 11:49 AM</div>
                  </div>
                </div>
                <ThreeDotBtn className="dotBtn" action={() => {}} />
              </div>
            </div>
            <div className="commentPart">
              <div className="title">Comments:</div>
              <div className="desRoot">
                <ThreeDotBtn className="dotBtn" action={() => {}} />
                <textarea
                  placeholder="Comment here"
                  value={commentArea}
                  onChange={(e) => setCommentArea(e.target.value)}
                />
                <div className="postBtn">Post</div>
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
    </>
  );
}

export default Basic;
