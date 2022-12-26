import { useState } from "react";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import "./Cases.css";

function Cases() {
  const tabData = ["All", "Case Comparison"];
  const [tab, setTab] = useState(tabData[0]);

  const handleTab = (e) => {
    setTab(e);
  };

  return (
    <>
      <div className="casesRoot">
        <div className="casesTitle">Cases</div>
        <div className="casesHeaderRoot">
          <ActionTab
            className="casesTab"
            data={tabData}
            onSelect={(e) => handleTab(e)}
            select={tab}
          />
          <PlusButton
            content="+ New case"
            className="casesHeaderBtn"
            action={() => {}}
          />
        </div>
        <div className="casesContainer">content</div>
      </div>
    </>
  );
}

export default Cases;
