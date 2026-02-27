import { useState, useCallback } from "react";
import "./CustomizeInlineChart.css";

const WEEKDAY_LABELS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const INITIAL_DAY_LABELS = [
  ...WEEKDAY_LABELS.slice(0, -1),
  "Today",
];

function CustomizeInlineChart() {
  const [dayLabels, setDayLabels] = useState(INITIAL_DAY_LABELS);

  const handleDaySelect = useCallback((selectedIndex: number) => {
    setDayLabels(
      WEEKDAY_LABELS.map((label, i) => (i === selectedIndex ? "Today" : label))
    );
  }, []);

  return (
    <div className="inline-chart">
      {dayLabels.map((label, index) => (
        <div
          key={`${label}-${index}`}
          className="inline-chart__item"
          style={{
            left: `calc(${(100 / (dayLabels.length - 1)) * index}% - 63.5px)`,
            top: "-7px",
          }}
          onClick={() => handleDaySelect(index)}
          role="button"
          tabIndex={0}
        >
          <div className="inline-chart__dot" aria-hidden />
          <span
            className={[
              "inline-chart__label",
              label === "Today" && "inline-chart__label--active",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CustomizeInlineChart;
