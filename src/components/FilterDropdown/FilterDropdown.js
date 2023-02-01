import { useState } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import sortIcon from "../../asset/images/sort_icon.svg";
import filterIcon from "../../asset/images/filter_icon.svg";
import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./FilterDropdown.css";

function FilterDropdown({ className, type, dropRoot, dropRootStyle }) {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRootRef = useOutsideClick(() => setDropShow(false));

  const handleClick = (event) => {
    setDropShow(!dropShow);
    event.stopPropagation();
  };
  return (
    <div
      className={`filterDropdownRoot ${className}`}
      onClick={(e) => handleClick(e)}
    >
      <div className="inputIcon">
        {type === "filter" ? (
          <img src={filterIcon} alt="icon" />
        ) : (
          <img src={sortIcon} alt="icon" />
        )}
      </div>
      <div className="filterDropdownIconRoot">
        {type === "filter" ? "Filter" : "Sort"}
        <img src={chevronIcon} alt="chevronIcon" />
      </div>

      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRootRef}>
          {dropRoot}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FilterDropdown;
