import "./ActionButton.css";

function ActionButton({ name, content, className, type }) {
  return (
    <div className={`buttonRoot ${className}`}>
      {type !== "common" ? <div className="buttonName">{name}:</div> : <></>}
      <div className="buttonContent">
        {content}
        <i className="fas fa-caret-down"></i>
      </div>
    </div>
  );
}

export default ActionButton;
