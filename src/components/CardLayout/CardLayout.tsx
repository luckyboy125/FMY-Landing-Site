import { memo } from "react";
import "./CardLayout.css";

export interface CardLayoutProps {
  className?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  headerStyle?: string;
  contentStyle?: string;
}

function CardLayout({
  className = "",
  children,
  header,
  headerStyle = "",
  contentStyle = "",
}: CardLayoutProps) {
  return (
    <div className={`${className} cardLayoutRoot`}>
      <div className={`${headerStyle} headerRoot`}>{header}</div>
      <div className={contentStyle}>{children}</div>
    </div>
  );
}

export default memo(CardLayout);
