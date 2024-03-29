import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatabaseInput from "./component/DatabaseInput/DatabaseInput";
import LetterSelectButton from "./component/LetterSelectButton/LetterSelectButton";
import ColorBtn from "../../components/ColorBtn/ColorBtn";
import ActionTab from "../../components/ActionTab/ActionTab";
import ThreeDotBtn from "../../components/ThreeDotBtn/ThreeDotBtn";
import CustomizeTable from "../../components/CustomizeTable/CustomizeTable";
import DatabaseSearchDropdown from "../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import person3 from "../../asset/person3.svg";
import tiktok from "../../asset/images/social/tiktok.svg";
import refresh from "../../asset/images/refresh_icon.svg";
import youtube from "../../asset/images/social/youtube.svg";
import twitter from "../../asset/images/social/twitter.svg";
import facebook from "../../asset/images/social/facebook.svg";
import tableAlertIcon from "../../asset/images/alert_icon.svg";
import instagram from "../../asset/images/social/instagram.svg";
import searchIcon from "../../asset/images/search_icon_white.svg";
import "./Database.css";

function Database() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [url, setUrl] = useState("Add URL of: post, user, website...");
  const [comment, setComment] = useState("Add a comment here...");
  const [cases, setCases] = useState("Add a case here...");
  const [tableSearch, setTableSearch] = useState("");
  const [mockTableData, setMockTableData] = useState([]);
  const [advancedToolBtn, setAdvancedToolBtn] = useState(false);
  const firstLetterSelect = ["User", "Post", "URL"];
  const [firstLetter, setFirstLetter] = useState(firstLetterSelect[0]);
  const secondLetterSelect = ["Content", "Comment"];
  const [secondLetter, setSecondLetter] = useState(secondLetterSelect[0]);

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
    setAdvancedToolBtn(false);
    query.set(
      "search_panel",
      query.get("search_panel") === null
        ? 1
        : query.get("search_panel") !== "0"
        ? 0
        : 1
    );
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  const handleAdvancedShow = () => {
    query.set("search_panel", 2);
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
              action={(e) => setUrl(e)}
              tool={<div className="addDBBtn">+ Add to DB</div>}
            />
            <div className="secondRoot">
              <DatabaseInput
                className="commentInput"
                inputValue={comment}
                action={(e) => setComment(e)}
              />
              <DatabaseInput
                className="casesInput"
                inputValue={cases}
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
                    {advancedToolBtn ? (
                      <>
                        <div className="searchTool">Save Search</div>
                        <div className="searchTool">Cancel Search</div>
                      </>
                    ) : (
                      <></>
                    )}
                    <img src={refresh} alt="tool" className="tool" />
                    <img
                      src={searchIcon}
                      alt="tool"
                      className="tool"
                      onClick={handleSearchShow}
                    />
                  </div>
                </div>
                {query.get("search_panel") === "1" ? (
                  <div className="secondItem">
                    <DatabaseInput
                      className="tableSearchInput"
                      inputValue={tableSearch}
                      placeholder="Insert text here..."
                      action={(e) => setTableSearch(e)}
                    />
                    <div className="searchBtn">
                      <img src={searchIcon} alt="tool" />
                    </div>
                    <div className="advancedBtn" onClick={handleAdvancedShow}>
                      Advanced Search
                    </div>
                  </div>
                ) : query.get("search_panel") === "2" ? (
                  <div className="thirdItem">
                    <div className="itemRoot">
                      <div className="inputRoot">
                        <div className="inputDes">Any of these words:</div>
                        <DatabaseInput
                          className="input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={(e) => setTableSearch(e)}
                        />
                      </div>
                      <div className="inputRoot">
                        <div className="inputDes">All of these words:</div>
                        <DatabaseInput
                          className="input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={(e) => setTableSearch(e)}
                        />
                      </div>
                      <DatabaseSearchDropdown
                        content="Cases"
                        select="All"
                        className="cases"
                        type="keyword"
                        childrenStyle="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <DatabaseSearchDropdown
                        content="Social platform"
                        select="All"
                        className="social"
                        type="keyword"
                        childrenStyle="dropChildrenRoot"
                      >
                        <div className="plateformDropdown">
                          <div className="item">
                            <div className="checkRoot"></div>
                            <img src={youtube} alt="social_icon" />
                          </div>
                          <div className="item">
                            <div className="checkRoot"></div>
                            <img src={instagram} alt="social_icon" />
                          </div>
                          <div className="item">
                            <div className="checkRoot"></div>
                            <img src={facebook} alt="social_icon" />
                          </div>
                          <div className="item">
                            <div className="checkRoot"></div>
                            <img src={twitter} alt="social_icon" />
                          </div>
                          <div className="item">
                            <div className="checkRoot"></div>
                            <img src={tiktok} alt="social_icon" />
                          </div>
                        </div>
                      </DatabaseSearchDropdown>
                      <LetterSelectButton
                        data={firstLetterSelect}
                        selected={firstLetter}
                        action={(e) => setFirstLetter(e)}
                      />
                    </div>
                    <div className="itemRoot">
                      <div className="inputRoot">
                        <div className="inputDes">This exact phrase:</div>
                        <DatabaseInput
                          className="input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={(e) => setTableSearch(e)}
                        />
                      </div>
                      <div className="inputRoot">
                        <div className="inputDes">None of these words:</div>
                        <DatabaseInput
                          className="input"
                          inputValue={tableSearch}
                          placeholder="Insert text here..."
                          action={(e) => setTableSearch(e)}
                        />
                      </div>
                      <DatabaseSearchDropdown
                        content="Added date"
                        select="All"
                        className="cases"
                        type="calendar"
                        childrenStyle="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <DatabaseSearchDropdown
                        content="Added by"
                        select="All"
                        className="social"
                        childrenStyle="dropChildrenRoot"
                      >
                        <div className="dropRoot">
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="dropItem">Lorem ipsum</div>
                          <div className="topRightArrow"></div>
                        </div>
                      </DatabaseSearchDropdown>
                      <LetterSelectButton
                        data={secondLetterSelect}
                        selected={secondLetter}
                        action={(e) => setSecondLetter(e)}
                      />
                    </div>
                    <div
                      className="searchBtn"
                      onClick={() => setAdvancedToolBtn(!advancedToolBtn)}
                    >
                      <img src={searchIcon} alt="tool" />
                    </div>
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
