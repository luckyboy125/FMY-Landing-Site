import { useEffect, useRef, useState } from "react";
import "./DropdownLayout.css";

function DropdownLayout({ className, children, dropRoot, dropRootStyle }) {
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
        if (!content.contains(e.target) && !root.contains(e.target)) {
          setDropShow(false);
        }
      }
    }
  }, [contentRef, dropShow]);

  return (
    <div
      className={`dropdownLayoutRoot ${className}`}
      onClick={() => setDropShow(!dropShow)}
      ref={rootRef}
    >
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

export default DropdownLayout;
