import { useState } from "react";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Cases.css";
import BubbleChart from "./component/BubbleChart/BubbleChart";
import Service from "./component/Service/Service";

function Cases() {
  const tabData = ["All", "Case Comparison"];
  const [tab, setTab] = useState(tabData[0]);
  const [searchValue, setSearchValue] = useState("");

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
    { category: "Lorem", amount: 0.31 },
    { category: "Lorem", amount: 0.81 },
    { category: "Lorem", amount: 0.53 },
    { category: "Lorem", amount: 0.19 },
    { category: "Ipsum", amount: 0.87 },
    { category: "Ipsum", amount: 0.28 },
    { category: "Ipsum", amount: 0.55 },
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
    { category: "Government", amount: 0.99, link: "government" },
    { category: "Service", amount: 0.59, link: "service" },
    { category: "Army", amount: 0.27, link: "army" },
  ];

  return (
    <>
      <div className="casesRoot">
        <div className="casesTitle">Cases</div>
        <div className="casesHeaderRoot">
          <ActionTab
            className="casesTab"
            data={tabData}
            onSelect={(e) => setTab(e)}
            select={tab}
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
          {/* <BubbleChart data={rawdata} width={1616} height={894} /> */}
          <Service />
        </div>
      </div>
    </>
  );
}

export default Cases;
