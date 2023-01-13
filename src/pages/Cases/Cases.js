import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import BubbleChart from "./component/BubbleChart/BubbleChart";
import Service from "./component/Service/Service";
import "./Cases.css";

function Cases() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Case Comparison", "Service"];
  const [searchValue, setSearchValue] = useState("");

  const handleTab = (_tab) => {
    query.set("cases_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const rawdata = [
    { category: "Lorem", amount: 0.28 },
    { category: "Lorem", amount: 0.55 },
    { category: "Lorem", amount: 0.43 },
    { category: "Lorem", amount: 0.31 },
    { category: "Lorem", amount: 0.81 },
    { category: "Lorem", amount: 0.53 },
    { category: "Lorem", amount: 0.19 },
    { category: "Lorem", amount: 0.28 },
    { category: "Lorem", amount: 0.55 },
    { category: "Lorem", amount: 0.43 },
    { category: "Government", amount: 0.99, link: "government" },
    { category: "Lorem", amount: 0.31 },
    { category: "Lorem", amount: 0.81 },
    { category: "Lorem", amount: 0.53 },
    { category: "Lorem", amount: 0.19 },
    { category: "Ipsum", amount: 0.87 },
    { category: "Service", amount: 0.59, link: "service" },
    { category: "Ipsum", amount: 0.28 },
    { category: "Ipsum", amount: 0.55 },
    { category: "Army", amount: 0.27, link: "army" },
    { category: "Ipsum", amount: 0.43 },
    { category: "Ipsum", amount: 0.91 },
    { category: "Ipsum", amount: 0.81 },
    { category: "Ipsum", amount: 0.87 },
    { category: "Ipsum", amount: 0.28 },
    { category: "Ipsum", amount: 0.55 },
    { category: "Ipsum", amount: 0.43 },
    { category: "Ipsum", amount: 0.91 },
    { category: "Ipsum", amount: 0.81 },
    { category: "Ipsum", amount: 0.81 },
  ];

  return (
    <>
      <div className="casesRoot">
        <div className="casesTitle">Cases</div>
        <div className="casesHeaderRoot">
          <ActionTab
            className="casesTab"
            data={tabData}
            onSelect={(e) => handleTab(e)}
            select={query.get("cases_tab") === null ? tabData[0]:query.get("cases_tab")}
          />
          <div className="lastItemRoot">
            <SearchInput
              action={(e) => setSearchValue(e.target.value)}
              inputValue={searchValue}
              className="caseSearchInput"
            />
            <PlusButton
              content="+ New case"
              className="casesHeaderBtn"
              action={() => {}}
            />
          </div>
        </div>
        <div className="casesContainer">
          {query.get("cases_tab") === tabData[0] ||
          query.get("cases_tab") === null ? (
            <BubbleChart data={rawdata} width={1616} height={894} />
          ) : query.get("cases_tab") === tabData[1] ? (
            <></>
          ) : (
            <Service />
          )}
        </div>
      </div>
    </>
  );
}

export default Cases;
