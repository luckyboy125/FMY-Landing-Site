import "./PlusButton.css";

function PlusButton({ className, action, content }) {
  return (
    <div className={`plusBtnRoot ${className}`} onClick={action}>
      {content}
    </div>
  );
}

export default PlusButton;
