import { useEffect, useRef, useState } from "react";
import searchIcon from "../../asset/images/search_icon.svg";
import "./SearchInput.css";

function SearchInput({ className, action, inputValue }) {
  const [initStatus, setInitStatus] = useState(true);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!initStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (rootRef && rootRef.current) {
        const root = rootRef.current;
        if (!root.contains(e.target)) {
          setInitStatus(true);
        }
      }
    }
  }, [rootRef]);

  return (
    <div
      className={`searchInputRoot ${className}`}
      onClick={() => setInitStatus(false)}
      ref={rootRef}
    >
      <div className="inputIcon">
        <img src={searchIcon} alt="searchIcon" />
      </div>
      {initStatus ? (
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
