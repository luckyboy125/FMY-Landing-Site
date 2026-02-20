import { useState, useCallback } from "react";
import "./CustomizeInlineChart.css";

const WEEK_DATA = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function CustomizeInlineChart() {
  const [data, setData] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Today",
  ]);

  const handleClick = useCallback((index: number) => {
    setData(
      WEEK_DATA.map((item, i) => (i === index ? "Today" : item))
    );
  }, []);

  return (
    <div className="customizeInlineChartRoot">
      {data.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="itemRoot"
          style={{
            left: `calc(${(100 / (data.length - 1)) * index}% - 63.5px)`,
            top: "-7px",
          }}
          onClick={() => handleClick(index)}
          role="button"
          tabIndex={0}
        >
          <div className="customizeInlineChartDot" aria-hidden />
          <span
            className={
              item !== "Today"
                ? "customizeInlineChartDes"
                : "activeCustomizeInlineChartDes"
            }
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CustomizeInlineChart;
