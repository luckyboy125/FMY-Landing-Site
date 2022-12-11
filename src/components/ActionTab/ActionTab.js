import "./ActionTab.css";

function ActionTab({ name, content, className, type }) {
  return (
    <div className={`actionTabRoot ${className}`}>
      <div className="actionTabItem active">All</div>
      <div className="actionTabItem">Completed</div>
    </div>
  );
}

export default ActionTab;
