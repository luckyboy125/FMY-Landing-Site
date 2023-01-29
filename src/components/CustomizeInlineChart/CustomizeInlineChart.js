import { useState } from "react";
import "./CustomizeInlineChart.css";

function CustomizeInlineChart() {
  const weekData = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [data, setData] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Today",
  ]);

  const handleClick = (index) => {
    const array = [];
    weekData.map((item, i) => {
      i === index ? array.push("Today") : array.push(item);
    });
    setData(array);
  };
  return (
    <>
      <div className="customizeInlineChartRoot">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="itemRoot"
              style={{
                left: `calc(${(100 / (data.length - 1)) * index}% - 63.5px)`,
                top: "-7px",
              }}
              onClick={() => handleClick(index)}
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
