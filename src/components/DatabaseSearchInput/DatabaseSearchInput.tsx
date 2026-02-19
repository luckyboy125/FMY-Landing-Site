import { useState, useCallback } from "react";
import arrow from "../../asset/images/nrds/arrow_down.svg";
import SearchIcon from "../../asset/images/nrds/search_icon.svg";
import "./DatabaseSearchInput.css";

export interface DatabaseSearchInputProps {
  className?: string;
}

function DatabaseSearchInput({
  className = "",
}: DatabaseSearchInputProps): JSX.Element {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  return (
    <div className={`databaseSearchInputRoot ${className}`}>
      <div className="front">
        <img src={SearchIcon} alt="search" />
        <input
          value={searchValue}
          onChange={handleChange}
          className="databaseSearchInput"
          placeholder="Insert text here..."
          aria-label="Search"
        />
      </div>
      <div className="databaseSearchInputDropdown">
        <img src={arrow} alt="down" />
      </div>
    </div>
  );
}

export default DatabaseSearchInput;
