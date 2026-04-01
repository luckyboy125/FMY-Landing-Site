import './Biocard.css';

export interface BiocardProps {
  className?: string;
  title: string;
  count: string;
  des: string;
  countDes: React.ReactNode;
}

function Biocard({
  className,
  title,
  count,
  des,
  countDes
}: BiocardProps) {
  return (
    <>
      <div className={`${className ?? ''} biocard`}>
        <div className="biocard__title">{title}</div>
        <div className="biocard__count">{count}</div>
        <div className="biocard__description">{des}</div>
        {countDes}
      </div>
    </>
  );
}

export default Biocard;
