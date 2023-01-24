import "./HashtagChartCard.css";

function HashtagChartCard({ className, title, size, description, chartData }) {
  return (
    <>
      <div className={`${className} hashtagChartCardRoot`}>
        <div className="title">{title}</div>
        <div className="hashtagChartCardRoot1">
          <div className="desRoot">
            <div className="size">{size}</div>
            <div className="desSize">
              <i className="fas fa-caret-up"></i>
              {description}
            </div>
          </div>
          <div className="chartRoot">
            {chartData?.map((item, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  style={{
                    height: `${(98.67 / 100) * item.value}px`,
                    background: item.color,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HashtagChartCard;
