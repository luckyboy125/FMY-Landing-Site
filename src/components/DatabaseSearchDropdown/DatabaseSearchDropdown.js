import keyword from "../../asset/images/nrds/keyword_icon.svg";
import calendar from "../../asset/images/nrds/calendar_icon.svg";
import "./DatabaseSearchDropdown.css";

function DatabaseSearchDropdown({ className, content, select, type }) {
  return (
    <div className={`databaseSearchDropdownRoot ${className}`}>
      {type === "calendar" ? (
        <img src={calendar} alt="calendar" />
      ) : type === "keyword" ? (
        <img src={keyword} alt="keyword" />
      ) : (
        <></>
      )}
      <div className="dropdownContent">{content}:</div>
      <div className="dropdownSelect">{select}</div>
      <i className="fas fa-caret-down"></i>
    </div>
  );
}

export default DatabaseSearchDropdown;
