import { useState } from "react";
import SearchIcon from "../../../../../asset/images/nrds/search_icon.svg";
import arrow from "../../../../../asset/images/nrds/arrow_down.svg";
import "./DatabaseInput.css";

function DatabaseInput() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="databaseInputRoot">
      <div className="front">
        <img src={SearchIcon} alt="search_icon" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="databaseInput"
          placeholder="Insert text here..."
        />
      </div>
      <div className="databaseInputDropdown">
        <img src={arrow} alt="down" />
      </div>
    </div>
  );
}

export default DatabaseInput;
