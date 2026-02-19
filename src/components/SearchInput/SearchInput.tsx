import { useState, useCallback } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import searchIcon from "../../asset/images/search_icon.svg";
import "./SearchInput.css";

export interface SearchInputProps {
  className?: string;
  action?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  inputWith?: boolean;
  onlyClick?: boolean;
  clickAction?: () => void;
}

function SearchInput({
  className = "",
  action,
  inputValue = "",
  inputWith = false,
  onlyClick = false,
  clickAction,
}: SearchInputProps): JSX.Element {
  const [initStatus, setInitStatus] = useState(true);
  const searchInputRef = useOutsideClick<HTMLDivElement>(() =>
    setInitStatus(true)
  );

  const handleClick = useCallback(() => {
    if (onlyClick && clickAction) {
      clickAction();
    } else {
      setInitStatus(false);
    }
  }, [onlyClick, clickAction]);

  return (
    <div
      className={`searchInputRoot ${className}`}
      style={{ cursor: onlyClick ? "pointer" : undefined }}
      onClick={handleClick}
      ref={searchInputRef}
      role="button"
      tabIndex={0}
    >
      <div className="inputIcon">
        <img src={searchIcon} alt="search" />
      </div>
      {onlyClick ? (
        "Search"
      ) : inputWith ? (
        <>
          Search
          <input
            className="inputContent"
            value={inputValue}
            onChange={(e) => action?.(e)}
            aria-label="Search input"
          />
        </>
      ) : initStatus ? (
        "Search"
      ) : (
        <input
          className="inputContent"
          value={inputValue}
          onChange={(e) => action?.(e)}
          aria-label="Search input"
        />
      )}
    </div>
  );
}

export default SearchInput;
