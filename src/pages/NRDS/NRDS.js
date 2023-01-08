import { useState } from "react";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import "./NRDS.css";
import Basic from "./component/Basic/Basic";
import Database from "./component/Database/Database";

function NRDS() {
  const tabData = ["NRD's", "Database", "Archive"];
  const [tab, setTab] = useState(tabData[0]);

  return (
    <>
      <div className="nrdsRoot">
        <div className="nrdsTitle">NRD's</div>
        <div className="nrdsHeaderRoot">
          <ActionTab
            className="nrdsHeaderTab"
            data={tabData}
            onSelect={(e) => setTab(e)}
            select={tab}
          />
          <PlusButton content="+ New keyword" action={() => {}} />
        </div>
        {tab === tabData[0] ? (
          <Basic />
        ) : tab === tabData[1] ? (
          <Database />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default NRDS;
