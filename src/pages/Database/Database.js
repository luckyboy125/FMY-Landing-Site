import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import DatabaseInput from "./component/DatabaseInput/DatabaseInput";
import "./Database.css";

function Database() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = [
    "All",
    "Posts",
    "Users",
    "Groups",
    "Pages",
    "Networks",
    "Other design",
  ];

  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [cases, setCases] = useState("");

  const handleTab = (_tab) => {
    query.set("database_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

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
        </div>
      </div>
    </>
  );
}

export default Database;
