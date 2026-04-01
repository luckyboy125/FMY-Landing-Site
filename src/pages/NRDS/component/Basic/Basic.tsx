import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doughnutChartColorData } from "../../../../helpers/chart.helper";
import PlusButton from "../../../../components/PlusButton/PlusButton";
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
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

interface BasicTableRow {
  domain: string;
  addedDate: string;
  ipaddress: string;
  keyword: string;
}

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
  const [mockTableData, setMockTableData] = useState<BasicTableRow[]>([]);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  const handleTableDeleteModal = useCallback(
    (index: string) => {
      const next = new URLSearchParams(location.search);
      next.set("tabledeletemodal_show", index);
      navigate({
        pathname: location.pathname,
        search: next.toString(),
      });
    },
    [location.pathname, navigate, location.search]
  );

  const handleTableDeleteModalClose = useCallback(() => {
    const next = new URLSearchParams(location.search);
    next.delete("tabledeletemodal_show");
    navigate({
      pathname: location.pathname,
      search: next.toString(),
    });
  }, [location.pathname, navigate, location.search]);

  const handleViewModal = useCallback(
    (index: number) => {
      const next = new URLSearchParams(location.search);
      next.set("tableviewmodal_show", String(index));
      navigate({
        pathname: location.pathname,
        search: next.toString(),
      });
    },
    [location.pathname, navigate, location.search]
  );

  const handleViewModalClose = useCallback(() => {
    const next = new URLSearchParams(location.search);
    next.delete("tableviewmodal_show");
    navigate({
      pathname: location.pathname,
      search: next.toString(),
    });
  }, [location.pathname, navigate, location.search]);

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
      <div className="nrds-basic__chart">
        <div className="nrds-basic__chart-header">
          <div className="nrds-basic__database-section">
            <div className="nrds-basic__header-item-title">Flagged NRD's</div>
            <div className="nrds-basic__chart-tools">
              <ActionButton
                name="Show"
                content="Last Week"
                className="nrds-basic__period-btn"
                panelClassName="nrds-basic__period-dropdown"
                panelContent={
                  <>
                    {chartPeriodDropdown?.map((item, index) => (
                      <div key={index} className="nrds-basic__period-dropdown-item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="nrds-basic__cases-section">
            <div className="nrds-basic__header-item-title">Keywords</div>
          </div>
        </div>
        <div className="nrds-basic__chart-content">
          <div className="nrds-basic__database-section">
            <div className="nrds-basic__description">
              <div className="nrds-basic__description-item" style={{ paddingBottom: "27px" }}>
                <div className="nrds-basic__description-item-title">Total NRD's flagged today</div>
                <div
                  className="nrds-basic__description-item-count"
                  style={{ fontSize: "40px", color: "#75b3ff", fontWeight: 400 }}
                >
                  108
                </div>
              </div>
              <div className="nrds-basic__description-item" style={{ paddingTop: "26px", paddingBottom: "30px" }}>
                <div className="nrds-basic__description-item-title">Changes from yesterday</div>
                <div className="nrds-basic__description-item-count" style={{ color: "#0fdf63" }}>
                  +12%
                </div>
              </div>
              <div className="nrds-basic__description-item" style={{ paddingTop: "26px" }}>
                <div className="nrds-basic__description-item-title">Domains under monitoring</div>
                <div className="nrds-basic__description-item-count" style={{ color: "#fff" }}>
                  5,403
                </div>
              </div>
            </div>
            <div className="nrds-basic__line-chart">
              <CustomizeLineChart
                labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                data={[
                  {
                    lineColor: ["#6AB4FF", "#C2A6FF"],
                    value: [1000, 1232, 1322, 900, 1488, 800, 1100],
                    fill: true,
                  },
                ]}
                width={721}
                height={275}
              />
            </div>
          </div>
          <div className="nrds-basic__cases-section">
            <div className="nrds-basic__description">
              <div className="nrds-basic__description-item">
                <div className="nrds-basic__description-item-title">Keywords in use</div>
                <div className="nrds-basic__description-item-count" style={{ color: "#fff" }}>
                  53
                </div>
              </div>
              <div className="nrds-basic__description-item">
                <div className="nrds-basic__description-item-title">{`New keywords (past 7 days)`}</div>
                <div className="nrds-basic__description-item-count" style={{ color: "#fff" }}>
                  +2
                </div>
              </div>
              <div className="nrds-basic__description-item" style={{ paddingBottom: "0px !important" }}>
                <div className="nrds-basic__description-item-title">{`Most flagged keyword (past 7 days)`}</div>
                <div className="nrds-basic__description-item-count" style={{ color: "#fff" }}>
                  Lorem ipsum
                </div>
              </div>
            </div>
            <div className="nrds-basic__doughnut">
              <CustomizeDoughnutChart
                data={doughnutChartData.data}
                labels={doughnutChartData.label}
                segmentColors={doughnutChartColorData}
                showCenterValue
              />
              <div className="nrds-basic__doughnut-desc">
                {doughnutChartData.label?.map((item, index) => (
                  <div className="nrds-basic__doughnut-desc-item" key={index}>
                    <div
                      className="nrds-basic__doughnut-icon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`,
                      }}
                    />
                    <div className="nrds-basic__doughnut-item-name">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizeTable
        className="nrds-basic__table"
        header={
          <div className="nrds-basic__table-header">
            <div className="nrds-basic__table-title">NRD's</div>
            <div className="nrds-basic__table-tools">
              <SearchInput
                action={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                inputValue={searchValue}
                className="nrds-basic__table-search"
              />
              <FilterDropdown
                className="nrds-basic__table-search"
                type="filter"
                panelClassName="nrds-basic__search-dropdown"
                panelContent={
                  <>
                    {nrdsTableSearchToolDropdown?.map((item, index) => (
                      <div key={index} className="nrds-basic__search-dropdown-item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
              <FilterDropdown
                className="nrds-basic__table-search"
                panelClassName="nrds-basic__search-dropdown"
                panelContent={
                  <>
                    {nrdsTableSearchToolDropdown?.map((item, index) => (
                      <div key={index} className="nrds-basic__search-dropdown-item">
                        {item}
                      </div>
                    ))}
                  </>
                }
              />
            </div>
          </div>
        }
        columnHeaders={["Domain", "Added Date", "IP Address", "Keyword", ""]}
        children={mockTableData?.map((item, index) => (
          <tr key={index}>
            <td className="nrds-basic__td--first" onClick={() => handleViewModal(index)}>
              {item.domain}
            </td>
            <td className="nrds-basic__td--second">{item.addedDate}</td>
            <td className="nrds-basic__td--third">{item.ipaddress}</td>
            <td className="nrds-basic__td--fourth">{item.keyword}</td>
            <td className="nrds-basic__td--fifth">
              <PlusButton
                content="+ Add to monitoring"
                action={() => handleTableDeleteModal(String(index))}
                className="nrds-basic__add-btn"
              />
              <div className="nrds-basic__des">Active</div>
            </td>
          </tr>
        ))}
      />
      <ModalLayout
        show={!!query.get("tableviewmodal_show")}
        onClose={handleViewModalClose}
        className="nrds-basic__domain-modal"
      >
        <ThreeDotBtn className="nrds-basic__dot-btn" action={() => {}} />
        <img src={closeIcon} alt="closIcon" onClick={handleViewModalClose} />
        <div className="nrds-basic__main">
          <div className="nrds-basic__left">+</div>
          <div className="nrds-basic__divider"></div>
          <div className="nrds-basic__right">
            <div className="nrds-basic__modal-title">General info:</div>
            <div className="nrds-basic__right-row">
              <div className="nrds-basic__right-row-item">Upload date:</div>
              <div className="nrds-basic__right-row-item">Username:</div>
            </div>
            <div className="nrds-basic__cases-section">
              <div className="nrds-basic__modal-title">Cases</div>
              <div className="nrds-basic__case-card">
                <img src={person3} alt="avatart" />
                <div className="nrds-basic__case-card-inner">
                  <div className="desContent">
                    <div className="nrds-basic__des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cras
                      felis interdum tempor, lobortis egestas volutpat consectetur.....
                    </div>
                    <div className="nrds-basic__des-date">Feb 6, 11:49 AM</div>
                  </div>
                </div>
                <ThreeDotBtn className="nrds-basic__dot-btn" action={() => {}} />
              </div>
            </div>
            <div className="nrds-basic__comment-section">
              <div className="nrds-basic__modal-title">Comments:</div>
              <div className="nrds-basic__comment-card">
                <ThreeDotBtn className="nrds-basic__dot-btn" action={() => {}} />
                <textarea
                  placeholder="Comment here"
                  value={commentArea}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setCommentArea(e.target.value)
                  }
                />
                <div className="nrds-basic__post-btn">Post</div>
              </div>
            </div>
          </div>
        </div>
      </ModalLayout>
      <DeleteModal
        className="tableDeleteModal"
        show={!!query.get("tabledeletemodal_show")}
        onClose={handleTableDeleteModalClose}
        message="Are you sure you want to add this domain to the database?"
      />
    </>
  );
}

export default Basic;
