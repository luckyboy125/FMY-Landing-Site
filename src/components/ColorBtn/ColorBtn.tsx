import { memo } from "react";
import "./ColorBtn.css";

export interface ColorBtnProps {
  icon?: React.ReactNode;
  className?: string;
  color?: string;
  width?: number;
  label?: string;
  showArrow?: boolean;
}

function ColorBtn({
  icon,
  className = "",
  color = "#000",
  width,
  label,
  showArrow = false,
}: ColorBtnProps) {
  return (
    <div
      className={`color-btn ${className}`.trim()}
      style={{
        background: `${color}33`,
        ...(width != null && { minWidth: `${width}px` }),
      }}
    >
      {icon}
      <span className="color-btn__label" style={{ color }}>
        {label}
      </span>
      {showArrow ? (
        <i
          className="color-btn__arrow fas fa-angle-down"
          style={{ color }}
          aria-hidden
        />
      ) : null}
    </div>
  );
}

export default memo(ColorBtn);
