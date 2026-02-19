import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import { doughnutChartColorData } from "../../helpers/chart.helper";
import ActionTab from "../../components/ActionTab/ActionTab";
import CardLayout from "../../components/CardLayout/CardLayout";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import RoundButton from "../../components/RoundButton/RoundButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import CustomizeTable from "../../components/CustomizeTable/CustomizeTable";
import CustomizeDoughnutChart from "../../components/CustomizeDoughnutChart/CustomizeDoughnutChart";
import closeIcon from "../../asset/images/close_icon.svg";
import youtube from "../../asset/images/social/youtube.svg";
import facebook from "../../asset/images/social/facebook.svg";
import instagram from "../../asset/images/social/instagram.svg";
import "./Networks.css";

interface NetworksTableRow {
  network: string;
  addeddate: string;
  active: boolean;
  number_of_users: number;
}

function Networks(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Government", "networkss", "Army"];
  const toolDropdownRef = useOutsideClick<HTMLDivElement>(() => setDropdownShow(false));

  const toolDropdown = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const [searchValue, setSearchValue] = useState("");
  const [dropdownSearch, setDropdownSearch] = useState("");
  const [dropdownShow, setDropdownShow] = useState(false);
  const [newNetworkModal, setNewNetworkModal] = useState(false);
  const [mockTableData, setMockTableData] = useState<NetworksTableRow[]>([]);
  const [mockDoughnutData, setMockDoughnutData] = useState<number[]>([]);

  const handleTab = useCallback(
    (tab: string) => {
      query.set("networks_tab", tab);
      navigate({
        pathname: location.pathname,
        search: query.toString(),
      });
    },
    [location.pathname, navigate, query]
  );

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          network: "Lorem ipsum dolor",
          addeddate: "17 Nov 2022",
          active: Math.floor(Math.random() * 2) === 0,
          number_of_users: Math.floor(Math.random() * 250),
        },
      ]);
    }
    const id = setInterval(() => {
      setMockDoughnutData([
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
        Math.floor(Math.random() * 500 + 900),
      ]);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="networksRoot">
      <div className="networksHeaderRoot">
        <div>
          <div className="networksHeaderTitle">Networks</div>
          <ActionTab
            className="networksHeaderTab"
            data={tabData}
            onSelect={handleTab}
            select={
              query.get("networks_tab") === null
                ? tabData[0]
                : (query.get("networks_tab") ?? tabData[0])
            }
          />
        </div>
        <div className="networksHeaderEnd">
          <div className="headerBtn" onClick={() => setNewNetworkModal(true)}>
            + New Network
          </div>
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
              <div className="descriptionItem" style={{ marginTop: "4px", paddingBottom: "24px" }}>
                <div className="descriptionItemTitle">Total networks</div>
                <div className="descriptionItemCount" style={{ color: "#0FDF63" }}>
                  630
                </div>
              </div>
              <div className="descriptionItem" style={{ padding: "28px 0 28px" }}>
                <div className="descriptionItemTitle">New networks (past 7 days)</div>
                <div className="descriptionItemCount" style={{ color: "#75B3FF" }}>
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
                {["first", "second", "third", "fourth", "fifth", "sixth"].map((item, index) => (
                  <div className="doughnutChartDesItem" key={index}>
                    <div
                      className="doughnutChartIcon"
                      style={{
                        background: `linear-gradient(238.95deg, ${doughnutChartColorData[index]?.first} 31.21%, ${doughnutChartColorData[index]?.last} 62.45%)`,
                      }}
                    />
                    <div className="doughnutChartItemName">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <RoundButton className="toolRoot" action={() => setDropdownShow(!dropdownShow)} />
            {dropdownShow ? (
              <div className="toolRootDropdown" ref={toolDropdownRef}>
                <div className="searchRoot">
                  <div className="round">
                    <i className="fas fa-search"></i>
                  </div>
                  <input
                    placeholder="Search"
                    value={dropdownSearch}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDropdownSearch(e.target.value)
                    }
                  />
                </div>
                {toolDropdown.map((item, index) => (
                  <div
                    key={index}
                    className="item"
                    onClick={() => setDropdownShow(false)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </CardLayout>
          <CardLayout
            className="networksChart2Root"
            contentStyle="networksChart2"
            headerStyle="networksChart2Header"
            header={<div className="title">Lorem ipsum</div>}
          />
        </div>
        <CustomizeTable
          className="networksContent2"
          header={
            <div className="networksTableHeader">
              <div className="networksTableTitle">Lorem ipsum dolor</div>
              <SearchInput
                action={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                inputValue={searchValue}
                className="networksTableSearchTool"
                inputWith
              />
            </div>
          }
          tableHeader={[
            "Network",
            "Added date",
            "Platform",
            "Active/Inactive",
            "Number of users",
          ]}
          body={mockTableData.map((item, index) => (
            <tr key={index}>
              <td>{item.network}</td>
              <td>{item.addeddate}</td>
              <td>
                {index % 3 === 0 ? (
                  <div>
                    <div className="imageRoot">
                      <img className="small" src={instagram} alt="social" />
                    </div>
                    <div className="imageRoot" style={{ marginTop: "5px" }}>
                      <img
                        className="small"
                        src={facebook}
                        alt="social"
                        style={{ marginRight: "10px" }}
                      />
                      <img className="small" src={youtube} alt="social" />
                    </div>
                  </div>
                ) : (
                  <div className="imageRoot">
                    <img className="big" src={instagram} alt="social" />
                  </div>
                )}
              </td>
              <td>
                <div className={item.active ? "active" : "inactive"}>
                  {item.active ? "Active" : "Inactive"}
                </div>
              </td>
              <td>{item.number_of_users}</td>
            </tr>
          ))}
        />
      </div>
      <ModalLayout
        className="newNetworkModal"
        show={newNetworkModal}
        onClose={() => setNewNetworkModal(false)}
      >
        <img
          src={closeIcon}
          className="closeIcon"
          alt="closeIcon"
          onClick={() => setNewNetworkModal(false)}
        />
        <div className="title">New Networks:</div>
        <div className="uploadBtn">+ Upload CSV</div>
      </ModalLayout>
    </div>
  );
}

export default Networks;
