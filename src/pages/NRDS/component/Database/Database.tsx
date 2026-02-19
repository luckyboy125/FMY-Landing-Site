import { useEffect, useState } from "react";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import CustomizeTable from "../../../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../../../components/FilterDropdown/FilterDropdown";
import DatabaseSearchInput from "../../../../components/DatabaseSearchInput/DatabaseSearchInput";
import DatabaseSearchDropdown from "../../../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import person1 from "../../../../asset/person1.svg";
import "./Database.css";

interface NrdsDatabaseTableRow {
  domain: string;
  addedDate: string;
  ipaddress: string;
  keyword: string;
}

function Database(): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const [mockTableData, setMockTableData] = useState<NrdsDatabaseTableRow[]>([]);

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
                <div className="nrdsDatabaseTableTitle">Domains under monitoring</div>
                <div className="nrdsDatabaseTableToolRoot">
                  <SearchInput
                    action={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    inputValue={searchValue}
                    className="nrdsDatabaseTableSearchTool"
                  />
                  <FilterDropdown className="nrdsDatabaseTableSearchTool" type="filter" />
                  <FilterDropdown />
                </div>
              </div>
              <div className="nrdsDatabaseSeacrhRoot">
                <DatabaseSearchInput />
                <div className="plusLetter">+</div>
                <DatabaseSearchDropdown
                  content="Keywords"
                  select="All"
                  className="dropdown"
                  type="keyword"
                />
                <DatabaseSearchDropdown
                  content="Upload dates"
                  select="All"
                  type="calendar"
                  className="dropdown"
                />
              </div>
            </div>
          </>
        }
        tableHeader={["Domain", "Added by", "Added Date", "IP Address", "Keyword", ""]}
        body={mockTableData?.map((item, index) => (
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
              <ThreeDotBtn action={() => {}} />
            </td>
          </tr>
        ))}
      />
    </>
  );
}

export default Database;
