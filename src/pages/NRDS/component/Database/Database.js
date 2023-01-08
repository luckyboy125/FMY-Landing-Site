import { useEffect, useState } from "react";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import "./Database.css";

function Database() {
  const [searchValue, setSearchValue] = useState("");
  const [mockTableData, setMockTableData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          domain: "rock.myspace.com",
          addedDate: "June 26, 2022",
          ipaddress: "251.196.63",
          keyword: "Lorem ipsum",
        },
      ]);
    }
  }, []);

  return (
    <>
      <CustomizeTable
        className="nrdsDatabaseTableRoot"
        header={
          <>
            <div className="nrdsDatabaseTableHeader">
              <div className="nrdsDatabaseTableTitle">
                Domains under monitoring
              </div>
              <div className="nrdsDatabaseTableToolRoot">
                <SearchInput
                  action={(e) => setSearchValue(e.target.value)}
                  inputValue={searchValue}
                  className="nrdsDatabaseTableSearchTool"
                />
                <FilterDropdown
                  className="nrdsDatabaseTableSearchTool"
                  type="filter"
                />
                <FilterDropdown className="nrdsDatabaseTableSearchTool" />
              </div>
            </div>
          </>
        }
        tableHeader={[
          "Domain",
          "Added by",
          "Added Date",
          "IP Address",
          "Keyword",
          "",
        ]}
        body={mockTableData.map((item, index) => {
          return (
            <tr key={index}>
              <td className="firstTd">{item.domain}</td>
              <td className="secondTd">{item.addedDate}</td>
              <td className="thirdTd">{item.ipaddress}</td>
              <td className="fourthTd">{item.keyword}</td>
              <td className="fifthTd">
                <div className="des">View</div>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default Database;
