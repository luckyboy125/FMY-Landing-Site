import "./BackBtn.css";

function BackBtn({ className }) {
  return (
    <div className={`backBtnRoot ${className}`}>
      <i className="fas fa-chevron-left"></i>
      <div className="backBtnContent">Back</div>
    </div>
  );
}

export default BackBtn;
