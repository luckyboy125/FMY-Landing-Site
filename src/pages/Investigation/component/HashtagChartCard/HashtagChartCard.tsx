import './HashtagChartCard.css';

export interface HashtagChartDataItem {
  color: string;
  value: number;
}

export interface HashtagChartCardProps {
  className?: string;
  title: string;
  size: string;
  description: string;
  chartData: HashtagChartDataItem[];
}

function HashtagChartCard({
  className,
  title,
  size,
  description,
  chartData
}: HashtagChartCardProps) {
  return (
    <>
      <div className={`${className ?? ''} hashtag-chart-card`}>
        <div className="hashtag-chart-card__title">{title}</div>
        <div className="hashtag-chart-card__body">
          <div className="hashtag-chart-card__desc">
            <div className="hashtag-chart-card__size">{size}</div>
            <div className="hashtag-chart-card__desc-size">
              <i className="fas fa-caret-up"></i>
              {description}
            </div>
          </div>
          <div className="hashtag-chart-card__chart">
            {chartData?.map((item, index) => (
              <div
                className="hashtag-chart-card__chart-item"
                key={index}
                style={{
                  height: `${(98.67 / 100) * item.value}px`,
                  background: item.color
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HashtagChartCard;
