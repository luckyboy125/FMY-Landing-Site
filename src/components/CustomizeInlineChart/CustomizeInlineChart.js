import { useEffect, useState } from "react";
import "./CustomizeInlineChart.css";

function CustomizeInlineChart() {
  const data = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Today",
    "Saturday",
    "Sunday",
  ];
  return (
    <>
      <div className="customizeInlineChartRoot">
        {data.map((item, index) => {
          return (
            <div
              className="itemRoot"
              style={{
                left: `calc(${(100 / (data.length - 1)) * index}% - 63.5px)`,
                top: "-7px",
              }}
            >
              <div className="customizeInlineChartDot"></div>
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
          );
        })}
      </div>
    </>
  );
}

export default CustomizeInlineChart;
