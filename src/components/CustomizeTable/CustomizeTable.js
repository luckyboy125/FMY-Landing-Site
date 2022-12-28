import "./CustomizeTable.css";
import arrowIcon from "../../asset/images/arrow_icon.svg";

function CustomizeTable({ header, body, tableHeader, className }) {
  return (
    <div className={`customizeTableRoot ${className}`}>
      {header}
      <table className="customizeTable">
        <thead>
          <tr>
            {tableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
      <div className="customizeTablePaginationRoot">
        <div className="customizeTablePagination">
          <div className="toolLeft">
            <img src={arrowIcon} alt="arrow" />
            <span>Previous</span>
          </div>
          <div className="customizeTablePaginationContent">
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="activeItem">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">...</div>
            <div className="item">23</div>
          </div>
          <div className="toolRight">
            <span>Next</span>
            <img src={arrowIcon} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeTable;
