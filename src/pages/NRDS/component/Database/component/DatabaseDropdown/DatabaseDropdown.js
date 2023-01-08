import keyword from "../../../../../../asset/images/nrds/keyword_icon.svg";
import "./DatabaseDropdown.css";

function DatabaseDropdown({ className }) {
  return (
    <div className={`databaseDropdownRoot ${className}`}>
      <img src={keyword} alt="keyword" />
      <div className="dropdownContent">Keywords:</div>
      <div className="dropdownSelect">All</div>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default DatabaseDropdown;
