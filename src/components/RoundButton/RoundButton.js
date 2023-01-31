import "./RoundButton.css";

function RoundButton({ className, action }) {
  return (
    <div className={`roundButtonRoot ${className}`} onClick={action}>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
}

export default RoundButton;
