import "./ChartLayout.css";

function ChartLayout({ name, button, className, children }) {
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

export default ChartLayout;
