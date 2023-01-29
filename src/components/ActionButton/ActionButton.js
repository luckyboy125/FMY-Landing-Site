import { useEffect, useRef, useState } from "react";
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
  const contentRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (dropShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (contentRef && contentRef.current & rootRef && rootRef.current) {
        const content = contentRef.current;
        const root = rootRef.current;
        // if (!content.contains(e.target) && !root.contains(e.target)) {
        console.log("here");
        setDropShow(false);
        // }
      }
    }
  }, [contentRef, dropShow]);

  return (
    <div
      className={`actionButtonRoot ${className}`}
      onClick={() => setDropShow(!dropShow)}
      ref={rootRef}
    >
      {type !== "common" ? <div className="buttonName">{name}:</div> : <></>}
      <div className="buttonContent">
        {content}
        <i className="fas fa-caret-down"></i>
      </div>
      {children}
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={contentRef}>
          {dropRoot}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ActionButton;
