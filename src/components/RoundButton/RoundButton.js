import "./RoundButton.css";

function RoundButton({ className }) {
  return (
    <div className={`roundButtonRoot ${className}`}>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
}

export default RoundButton;
