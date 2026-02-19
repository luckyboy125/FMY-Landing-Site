import { memo } from "react";
import "./ColorBtn.css";

export interface ColorBtnProps {
  icon?: React.ReactNode;
  className?: string;
  color?: string;
  width?: number;
  name?: string;
  arrowShow?: boolean;
}

function ColorBtn({
  icon,
  className = "",
  color = "#000",
  width,
  name,
  arrowShow = false,
}: ColorBtnProps): JSX.Element {
  return (
    <div
      className={`colorBtn ${className}`}
      style={{
        background: `${color}33`,
        ...(width != null && { minWidth: `${width}px` }),
      }}
    >
      {icon}
      <span className="btnName" style={{ color }}>
        {name}
      </span>
      {arrowShow ? (
        <i className="fas fa-angle-down" style={{ color }} aria-hidden />
      ) : null}
    </div>
  );
}

export default memo(ColorBtn);
