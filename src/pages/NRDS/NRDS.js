import { useState } from "react";
import "./NRDS.css";

function NRDS() {
  const tabData = ["All", "Case Comparison"];
  const [tab, setTab] = useState(tabData[0]);
  const [searchValue, setSearchValue] = useState("");

  const handleTab = (e) => {
    setTab(e);
  };

  return (
    <>
      <div>NRDS</div>
    </>
  );
}

export default NRDS;
