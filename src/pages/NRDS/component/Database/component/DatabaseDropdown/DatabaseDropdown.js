import keyword from "../../../../../../asset/images/nrds/keyword_icon.svg";
import calendar from "../../../../../../asset/images/nrds/calendar_icon.svg";
import "./DatabaseDropdown.css";

function DatabaseDropdown({ className, content, select, type }) {
  return (
    <div className={`databaseDropdownRoot ${className}`}>
      {type === "calendar" ? (
        <img src={calendar} alt="calendar" />
      ) : (
        <img src={keyword} alt="keyword" />
      )}
      <div className="dropdownContent">{content}:</div>
      <div className="dropdownSelect">{select}</div>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default DatabaseDropdown;
