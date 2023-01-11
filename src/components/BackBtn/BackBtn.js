import "./BackBtn.css";

function BackBtn({ className, action }) {
  return (
    <div className={`backBtnRoot ${className}`} onClick={action}>
      <i className="fas fa-chevron-left"></i>
      <div className="backBtnContent">Back</div>
    </div>
  );
}

export default BackBtn;
