import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import "./Reports.css";

function Reports() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["Lorem", "Lorem"];

  const handleTab = (_tab) => {
    query.set("reports_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="reportsRoot">
        <div className="reportsHeaderRoot">
          <div>
            <div className="reportsHeaderTitle">Reports</div>
            <ActionTab
              className="reportsHeaderTab"
              data={tabData}
              onSelect={(e) => handleTab(e)}
              select={
                query.get("reports_tab") === null
                  ? tabData[0]
                  : query.get("reports_tab")
              }
            />
          </div>
          <div className="reportsHeaderEnd">
            <div className="headerBtn">Lorem</div>
            <div className="headerBtn">Lorem</div>
          </div>
        </div>
        <div className="reportsContent">
          <div className="item">
            <div className="reportsItemTitle">Lorem ipsum</div>
            <div className="reportsItemRoot"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
