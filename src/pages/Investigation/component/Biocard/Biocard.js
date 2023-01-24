import "./Biocard.css";

function Biocard({ className, title, count, des, countDes }) {
  return (
    <>
      <div className={`${className} biocardRoot`}>
        <div className="title">{title}</div>
        <div className="count">{count}</div>
        <div className="des">{des}</div>
        {countDes}
      </div>
    </>
  );
}

export default Biocard;
