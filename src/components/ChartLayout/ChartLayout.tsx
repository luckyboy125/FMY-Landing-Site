import { memo } from "react";
import "./ChartLayout.css";

export interface ChartLayoutProps {
  name?: string;
  button?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

function ChartLayout({
  name,
  button,
  className = "",
  children,
}: ChartLayoutProps) {
  return (
    <div className={`chartLayout ${className}`}>
      <div className="chartLayoutHeaderPart">
        <div className="chartLayoutHeaderPartName">{name}</div>
        {button}
      </div>
      <div className="chartLayoutContent">{children}</div>
    </div>
  );
}

export default memo(ChartLayout);
