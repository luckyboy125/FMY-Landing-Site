import { useCallback, memo } from "react";
import "./ActionTab.css";

export interface ActionTabProps {
  className?: string;
  data?: string[];
  onSelect: (item: string) => void;
  select?: string;
}

function ActionTab({ className = "", data, onSelect, select }: ActionTabProps) {
  const handleClick = useCallback(
    (item: string) => {
      onSelect(item);
    },
    [onSelect]
  );

  return (
    <div className={`action-tab ${className}`.trim()}>
      {data?.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={[
            "action-tab__item",
            select === item && "action-tab__item--active",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => handleClick(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default memo(ActionTab);
