import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionTab from "../../components/ActionTab/ActionTab";
import reportCard from "../../asset/images/report_card.svg";
import "./Reports.css";

const TAB_DATA = ["Lorem", "Lorem"];

function Reports(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const handleTab = useCallback(
    (tab: string) => {
      query.set("reports_tab", tab);
      navigate({
        pathname: location.pathname,
        search: query.toString(),
      });
    },
    [navigate, location.pathname, query]
  );

  const currentTab =
    query.get("reports_tab") === null ? TAB_DATA[0] : query.get("reports_tab");

  return (
    <div className="reportsRoot">
      <div className="reportsHeaderRoot">
        <div>
          <div className="reportsHeaderTitle">Reports</div>
          <ActionTab
            className="reportsHeaderTab"
            data={TAB_DATA}
            onSelect={handleTab}
            select={currentTab ?? undefined}
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
          <div className="reportsItemRoot">
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <div className="toolArrow left">
              <i className="fas fa-chevron-left" aria-hidden />
            </div>
            <div className="toolArrow right">
              <i className="fas fa-chevron-right" aria-hidden />
            </div>
          </div>
        </div>
        <div className="item">
          <div className="reportsItemTitle">Lorem ipsum</div>
          <div className="reportsItemRoot">
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <div className="toolArrow left">
              <i className="fas fa-chevron-left" aria-hidden />
            </div>
            <div className="toolArrow right">
              <i className="fas fa-chevron-right" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
