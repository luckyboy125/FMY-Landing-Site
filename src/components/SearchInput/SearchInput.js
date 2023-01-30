import { useState } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import searchIcon from "../../asset/images/search_icon.svg";
import "./SearchInput.css";

function SearchInput({
  className,
  action,
  inputValue,
  inputWith,
  onlyClick,
  clickAction,
}) {
  const [initStatus, setInitStatus] = useState(true);
  const searchInputRef = useOutsideClick(() => setInitStatus(true));

  const handleClick = () => {
    onlyClick ? clickAction() : setInitStatus(false);
  };

  return (
    <div
      className={`searchInputRoot ${className}`}
      style={{ cursor: `${onlyClick ? "pointer" : ""}` }}
      onClick={handleClick}
      ref={searchInputRef}
    >
      <div className="inputIcon">
        <img src={searchIcon} alt="searchIcon" />
      </div>
      {onlyClick ? (
        <>Search</>
      ) : inputWith ? (
        <>
          Search
          <input
            className="inputContent"
            value={inputValue}
            onChange={(e) => action(e)}
          />
        </>
      ) : initStatus ? (
        "Search"
      ) : (
        <input
          className="inputContent"
          value={inputValue}
          onChange={(e) => action(e)}
        />
      )}
    </div>
  );
}

export default SearchInput;
