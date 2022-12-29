import filterIcon from "../../asset/images/filter_icon.svg";
import sortIcon from "../../asset/images/sort_icon.svg";
import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./ActionDropdown.css";

function ActionDropdown({ className, type }) {
  return (
    <div className={`actionDropdownRoot ${className}`}>
      Related cases
      <img src={chevronIcon} alt="chevronIcon" />
    </div>
  );
}

export default ActionDropdown;
