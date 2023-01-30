import { useState } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import "./ActionButton.css";

function ActionButton({
  name,
  content,
  className,
  type,
  children,
  dropRoot,
  dropRootStyle,
}) {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRootRef = useOutsideClick(() => setDropShow(false));

  const handleClick = (event) => {
    setDropShow(!dropShow);
    event.stopPropagation();
  };

  return (
    <div
      className={`actionButtonRoot ${className}`}
      onClick={(e) => handleClick(e)}
    >
      {type !== "common" ? <div className="buttonName">{name}:</div> : <></>}
      <div className="buttonContent">
        {content}
        <i className="fas fa-caret-down"></i>
      </div>
      {children}
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRootRef}>
          {dropRoot}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ActionButton;
