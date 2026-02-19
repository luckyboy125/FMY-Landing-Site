import "./Biocard.css";

export interface BiocardProps {
  className?: string;
  title: string;
  count: string;
  des: string;
  countDes: React.ReactNode;
}

function Biocard({ className, title, count, des, countDes }: BiocardProps): JSX.Element {
  return (
    <>
      <div className={`${className ?? ""} biocardRoot`}>
        <div className="title">{title}</div>
        <div className="count">{count}</div>
        <div className="des">{des}</div>
        {countDes}
      </div>
    </>
  );
}

export default Biocard;
