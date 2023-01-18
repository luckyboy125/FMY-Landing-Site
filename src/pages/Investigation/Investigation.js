import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import DatabaseSearchDropdown from "../../components/DatabaseSearchDropdown/DatabaseSearchDropdown";
import "./Investigation.css";

function Investigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Lorem", "Lorem", "Lorem", "Lorem"];

  const handleTab = (_tab) => {
    query.set("investigation_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="investigationRoot">
        <div className="investigationHeaderRoot">
          <div>
            <div className="investigationHeaderTitle">Investigation</div>
            <ActionTab
              className="investigationHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("investigation_tab") === null
                  ? tabData[0]
                  : query.get("investigation_tab")
              }
            />
          </div>
        </div>
        <div className="investigationContent">
          <div className="investigationContent1">
            <DatabaseSearchDropdown
              content="Cases"
              select="All"
              className="dropdown"
            />
            <div className="inputRoot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investigation;
