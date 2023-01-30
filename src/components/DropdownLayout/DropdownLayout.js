import { useState } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import "./DropdownLayout.css";

function DropdownLayout({ className, children, dropRoot, dropRootStyle }) {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRef = useOutsideClick(() => setDropShow(false));

  return (
    <div
      className={`dropdownLayoutRoot ${className}`}
      onClick={() => setDropShow(!dropShow)}
    >
      {children}
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRef}>
          {dropRoot}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DropdownLayout;
