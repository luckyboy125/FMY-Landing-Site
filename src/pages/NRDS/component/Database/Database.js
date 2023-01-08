import { useEffect, useState } from "react";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import DatabaseDropdown from "./component/DatabaseDropdown/DatabaseDropdown";
import DatabaseInput from "./component/DatabaseInput/DatabaseInput";
import person1 from "../../../../asset/person1.svg";
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
            <div className="databaseHeader">
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
                  <FilterDropdown />
                </div>
              </div>
              <div className="nrdsDatabaseSeacrhRoot">
                <DatabaseInput />
                <div className="plusLetter">+</div>
                <DatabaseDropdown
                  content="Keywords"
                  select="All"
                  className="dropdown"
                />
                <DatabaseDropdown
                  content="Upload dates"
                  select="All"
                  type="calendar"
                  className="dropdown"
                />
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
              <td className="avatarTd">
                <img src={person1} alt="avatar" />
                Noy
              </td>
              <td className="secondTd">{item.addedDate}</td>
              <td className="thirdTd">{item.ipaddress}</td>
              <td className="fourthTd">{item.keyword}</td>
              <td className="fifthTd">
                <div className="des">View</div>
                <div className="dotGroup" onClick={() => {}}>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </td>
            </tr>
          );
        })}
      />
    </>
  );
}

export default Database;
