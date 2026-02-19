import { useState, useCallback } from "react";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import "./ActionButton.css";

export interface ActionButtonProps {
  name?: string;
  content?: React.ReactNode;
  className?: string;
  type?: string;
  children?: React.ReactNode;
  dropRoot?: React.ReactNode;
  dropRootStyle?: string;
}

function ActionButton({
  name,
  content,
  className = "",
  type,
  children,
  dropRoot,
  dropRootStyle = "",
}: ActionButtonProps): JSX.Element {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRootRef = useOutsideClick<HTMLDivElement>(() =>
    setDropShow(false)
  );

  const handleClick = useCallback((event: React.MouseEvent) => {
    setDropShow((prev) => !prev);
    event.stopPropagation();
  }, []);

  return (
    <div
      className={`actionButtonRoot ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {type !== "common" ? <div className="buttonName">{name}:</div> : null}
      <div className="buttonContent">
        {content}
        <i className="fas fa-caret-down" aria-hidden />
      </div>
      {children}
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRootRef}>
          {dropRoot}
        </div>
      ) : null}
    </div>
  );
}

export default ActionButton;
