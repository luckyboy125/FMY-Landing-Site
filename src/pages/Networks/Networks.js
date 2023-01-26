import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import "./Networks.css";

function Networks() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["All", "Government", "Services", "Army"];

  const handleTab = (_tab) => {
    query.set("networks_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="networksRoot">
        <div className="networksHeaderRoot">
          <div>
            <div className="networksHeaderTitle">Networks</div>
            <ActionTab
              className="networksHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("networks_tab") === null
                  ? tabData[0]
                  : query.get("networks_tab")
              }
            />
          </div>
          <div className="networksHeaderEnd">
            <div className="headerBtn">+ New Network</div>
          </div>
        </div>
        <div className="networksContent"></div>
      </div>
    </>
  );
}

export default Networks;
