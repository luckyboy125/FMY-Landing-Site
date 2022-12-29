import filterIcon from "../../../../asset/images/filter_icon.svg";
import sortIcon from "../../../../asset/images/sort_icon.svg";
import chevronIcon from "../../../../asset/images/chevron_icon.svg";

import "./DropdownTool.css";

function DropdownTool({ className, type }) {
  return (
    <div className={`dropdownToolRoot ${className}`}>
      <div className="inputIcon">
        {type === "filter" ? (
          <img src={filterIcon} alt="icon" />
        ) : (
          <img src={sortIcon} alt="icon" />
        )}
      </div>
      <div className="dropdownToolIconRoot">
        {type === "filter" ? "Filter" : "Sort"}
        <img src={chevronIcon} alt="chevronIcon" />
      </div>
    </div>
  );
}

export default DropdownTool;
