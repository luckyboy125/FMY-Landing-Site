import "./CustomizeTable.css";
import arrowIcon from "../../asset/images/arrow_icon.svg";

function CustomizeTable() {
  return (
    <div className="customizeTableRoot">
      <div className="customizeTableHeader">
        <div className="customizeTableTitle">NRD’s</div>
        <div className="customizeTableToolRoot">
          <SearchInput
            action={(e) => setSearchValue(e.target.value)}
            inputValue={searchValue}
            className="customizeTableSearchTool"
          />
          <SearchInput
            action={(e) => setSearchValue(e.target.value)}
            inputValue={searchValue}
            className="customizeTableSearchTool"
          />
          <SearchInput
            action={(e) => setSearchValue(e.target.value)}
            inputValue={searchValue}
            className="customizeTableSearchTool"
          />
        </div>
      </div>
      <table className="customizeTable">
        <thead>
          <tr>
            <th>Domain</th>
            <th>Added Date</th>
            <th>IP Address</th>
            <th>Keyword</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mockTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="firstTd">{item.domain}</td>
                <td className="secondTd">{item.addedDate}</td>
                <td className="thirdTd">{item.ipaddress}</td>
                <td className="fourthTd">{item.keyword}</td>
                <td className="fifthTd">
                  <PlusButton
                    content="+ Add to monitoring"
                    action={() => {}}
                    className="addBtn"
                  />
                  <div className="des">Active</div>
                </td>
              </tr>
            );
          })}
        </tbody>
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
