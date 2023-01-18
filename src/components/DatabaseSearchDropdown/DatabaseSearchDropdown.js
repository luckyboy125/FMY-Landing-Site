import { useState } from "react";
import keyword from "../../asset/images/nrds/keyword_icon.svg";
import calendar from "../../asset/images/nrds/calendar_icon.svg";
import "./DatabaseSearchDropdown.css";

function DatabaseSearchDropdown({
  className,
  content,
  select,
  type,
  children,
  childrenStyle,
}) {
  const [dropwDownShow, setDropdownShow] = useState(false);
  return (
    <div
      className={`databaseSearchDropdownRoot ${className}`}
      onClick={() => setDropdownShow(!dropwDownShow)}
    >
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
      {dropwDownShow ? (
        <div className={`childrenRoot ${childrenStyle}`}>{children}</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DatabaseSearchDropdown;
