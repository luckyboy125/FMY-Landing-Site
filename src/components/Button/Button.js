import "./Button.css";

function Button() {
  return (
    <div className="buttonRoot">
      <div className="buttonName">Show:</div>
      <div className="buttonContent">
        This Week
        <i className="fas fa-caret-down"></i>
      </div>
    </div>
  );
}

export default Button;
