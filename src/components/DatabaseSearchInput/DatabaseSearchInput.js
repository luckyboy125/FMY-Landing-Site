import { useState } from "react";
import arrow from "../../asset/images/nrds/arrow_down.svg";
import SearchIcon from "../../asset/images/nrds/search_icon.svg";
import "./DatabaseSearchInput.css";

function DatabaseSearchInput({ className }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={`databaseSearchInputRoot ${className}`}>
      <div className="front">
        <img src={SearchIcon} alt="search_icon" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="databaseSearchInput"
          placeholder="Insert text here..."
        />
      </div>
      <div className="databaseSearchInputDropdown">
        <img src={arrow} alt="down" />
      </div>
    </div>
  );
}

export default DatabaseSearchInput;
