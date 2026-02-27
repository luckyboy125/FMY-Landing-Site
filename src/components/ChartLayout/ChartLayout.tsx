import { memo } from "react";
import "./ChartLayout.css";

export interface ChartLayoutProps {
  title?: string;
  headerAction?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

function ChartLayout({
  title,
  headerAction,
  className = "",
  children,
}: ChartLayoutProps) {
  return (
    <div className={`chart-layout ${className}`.trim()}>
      <div className="chart-layout__header">
        <h2 className="chart-layout__title">{title}</h2>
        {headerAction}
      </div>
      <div className="chart-layout__content">{children}</div>
    </div>
  );
}

export default memo(ChartLayout);
