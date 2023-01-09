import { useState } from "react";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Cases.css";
import BubbleChart from "./component/BubbleChart";

function Cases() {
  const tabData = ["All", "Case Comparison"];
  const [tab, setTab] = useState(tabData[0]);
  const [searchValue, setSearchValue] = useState("");

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
          <BubbleChart />
        </div>
      </div>
    </>
  );
}

export default Cases;
