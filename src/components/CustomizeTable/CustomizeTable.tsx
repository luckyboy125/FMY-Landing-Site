import arrowIcon from "../../asset/images/arrow_icon.svg";
import "./CustomizeTable.css";

export interface CustomizeTableProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  columnHeaders?: string[];
  className?: string;
}

function CustomizeTable({
  header,
  children,
  columnHeaders,
  className = "",
}: CustomizeTableProps) {
  return (
    <div className={`customize-table ${className}`.trim()}>
      {header}
      <table className="customize-table__table">
        <thead>
          <tr>
            {columnHeaders?.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <div className="customize-table__pagination">
        <div className="customize-table__pagination-inner">
          <button type="button" className="customize-table__nav customize-table__nav--prev" aria-label="Previous page">
            <img src={arrowIcon} alt="" />
            <span>Previous</span>
          </button>
          <div className="customize-table__pages">
            <div className="customize-table__page">1</div>
            <div className="customize-table__page">2</div>
            <div className="customize-table__page customize-table__page--active">3</div>
            <div className="customize-table__page">4</div>
            <div className="customize-table__page">5</div>
            <div className="customize-table__page">...</div>
            <div className="customize-table__page">23</div>
          </div>
          <button type="button" className="customize-table__nav customize-table__nav--next" aria-label="Next page">
            <span>Next</span>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizeTable;
