import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import CustomizeTable from "../../components/CustomizeTable/CustomizeTable";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import ThreeDotBtn from "../../components/ThreeDotBtn/ThreeDotBtn";
import DatabaseInput from "./component/DatabaseInput/DatabaseInput";
import DatabaseSearchInput from "../../components/DatabaseSearchInput/DatabaseSearchInput";
import DatabaseSearchDropdown from "../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import refresh from "../../asset/images/refresh_icon.svg";
import person3 from "../../asset/person3.svg";
import youtube from "../../asset/images/social/youtube.svg";
import tableAlertIcon from "../../asset/images/alert_icon.svg";
import searchIcon from "../../asset/images/search_icon_white.svg";
import "./Database.css";

function Database() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [cases, setCases] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const [mockTableData, setMockTableData] = useState([]);

  const tabData = [
    "All",
    "Posts",
    "Users",
    "Groups",
    "Pages",
    "Networks",
    "Other design",
  ];

  const handleTab = (_tab) => {
    query.set("database_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const handleSearchShow = () => {
    query.set(
      "search_show",
      query.get("search_show") === null
        ? true
        : query.get("search_show") === "true"
        ? false
        : true
    );
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setMockTableData((pre) => [
        ...pre,
        {
          item: "Post",
          user: "Olive Yew",
          addeddate: "June 26, 2022 15:45",
          addbyuser: {
            name: "Nimrod",
            image: person3,
          },
          case: "Lorem ipsum",
          priority: "Medium",
          view: {
            alert: Math.floor(Math.random() * 2) === 1,
          },
        },
      ]);
    }
  }, []);

  return (
    <>
      <div className="databaseRoot">
        <div className="databaseHeaderRoot">
          <div>
            <div className="databaseHeaderTitle">Database</div>
            <ActionTab
              className="databaseHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("database_tab") === null
                  ? tabData[0]
                  : query.get("database_tab")
              }
            />
          </div>
        </div>
        <div className="databaseContent">
          <div className="databaseContent1">
            <DatabaseInput
              className="urlInput"
              inputValue={url}
              placeholder="Add URL of: post, user, website..."
              action={(e) => setUrl(e)}
              tool={<div className="addDBBtn">+ Add to DB</div>}
            />
            <div className="secondRoot">
              <DatabaseInput
                className="commentInput"
                inputValue={comment}
                placeholder="Add a comment here..."
                action={(e) => setComment(e)}
              />
              <DatabaseInput
                className="casesInput"
                inputValue={cases}
                placeholder="Add a case here..."
                action={(e) => setCases(e)}
                tool={
                  <div className="toolRoot">
                    <div className="plus">+</div>
                    <div className="circleBtn">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <CustomizeTable
            className="databaseContent2"
            header={
              <div className="databaseTableHeader">
                <div className="firstItem">
                  <div className="databaseTableTitle">Database items</div>
                  <div className="toolEndRoot">
                    <img src={refresh} alt="tool" className="tool" />
                    <img
                      src={searchIcon}
                      alt="tool"
                      className="tool"
                      onClick={handleSearchShow}
                    />
                  </div>
                </div>
                {query.get("search_show") === "true" ? (
                  <div className="secondItem">
                    <DatabaseSearchInput />
                    <div className="plusLetter">+</div>
                    <DatabaseSearchDropdown
                      content="Cases"
                      select="All"
                      className="dropdown"
                    />
                    <DatabaseSearchDropdown
                      content="Posted dates"
                      select="All"
                      type="calendar"
                      className="dropdown"
                    />
                    <DatabaseSearchDropdown
                      content="Upload dates"
                      select="All"
                      type="calendar"
                      className="dropdown"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            }
            tableHeader={[
              "",
              "Item",
              "User",
              "Added date",
              "Added by",
              "Case",
              "Priority",
              "Screenshot",
              "Link",
              "",
            ]}
            body={mockTableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={youtube} alt="social_icon"></img>
                  </td>
                  <td>{item.item}</td>
                  <td>{item.user}</td>
                  <td>{item.addeddate}</td>
                  <td>
                    <img src={item.addbyuser.image} alt="avatar" />{" "}
                    {item.addbyuser.name}
                  </td>
                  <td>{item.case}</td>
                  <td>
                    <ColorBtn
                      name="Medium"
                      width={130}
                      arrowShow
                      color="#37CE4A"
                    />
                  </td>
                  <td>
                    {item.view.alert ? (
                      <img
                        src={tableAlertIcon}
                        className="alertIcon"
                        alt="alert"
                      />
                    ) : (
                      <></>
                    )}
                    View
                  </td>
                  <td>Link</td>
                  <td>
                    <ThreeDotBtn className="dotBtn" action={() => {}} />
                  </td>
                </tr>
              );
            })}
          />
        </div>
      </div>
    </>
  );
}

export default Database;
