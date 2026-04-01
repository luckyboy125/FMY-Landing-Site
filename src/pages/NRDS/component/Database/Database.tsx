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

function Database() {
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
        className="nrds-database"
        header={
          <>
            <div className="nrds-database__header">
              <div className="nrds-database__table-header">
                <div className="nrds-database__title">Domains under monitoring</div>
                <div className="nrds-database__tool">
                  <SearchInput
                    action={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    inputValue={searchValue}
                    className="nrds-database__search-tool"
                  />
                  <FilterDropdown className="nrds-database__search-tool" type="filter" />
                  <FilterDropdown />
                </div>
              </div>
              <div className="nrds-database__search-root">
                <DatabaseSearchInput />
                <div className="nrds-database__plus-letter">+</div>
                <DatabaseSearchDropdown
                  label="Keywords"
                  selectedValue="All"
                  className="nrds-database__dropdown"
                  type="keyword"
                />
                <DatabaseSearchDropdown
                  label="Upload dates"
                  selectedValue="All"
                  type="calendar"
                  className="nrds-database__dropdown"
                />
              </div>
            </div>
          </>
        }
        columnHeaders={["Domain", "Added by", "Added Date", "IP Address", "Keyword", ""]}
        children={mockTableData?.map((item, index) => (
          <tr key={index}>
            <td className="nrds-database__td--first">{item.domain}</td>
            <td className="nrds-database__td--avatar">
              <img src={person1} alt="avatar" />
              Noy
            </td>
            <td className="nrds-database__td--second">{item.addedDate}</td>
            <td className="nrds-database__td--third">{item.ipaddress}</td>
            <td className="nrds-database__td--fourth">{item.keyword}</td>
            <td className="nrds-database__td--fifth">
              <div className="nrds-database__description">View</div>
              <ThreeDotBtn action={() => {}} />
            </td>
          </tr>
        ))}
      />
    </>
  );
}

export default Database;
