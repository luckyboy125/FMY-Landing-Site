import filterIcon from "../../asset/images/filter_icon.svg";
import sortIcon from "../../asset/images/sort_icon.svg";
import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./FilterDropdown.css";

function FilterDropdown({ className, type }) {
  return (
    <div className={`filterDropdownRoot ${className}`}>
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
    </div>
  );
}

export default FilterDropdown;
