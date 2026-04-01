import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ActionTab from '../../components/ActionTab/ActionTab';
import reportCard from '../../asset/images/report_card.svg';
import './Reports.css';

const TAB_DATA = ['Lorem', 'Lorem'];

function Reports() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const handleTab = useCallback(
    (tab: string) => {
      const next = new URLSearchParams(location.search);
      next.set('reports_tab', tab);
      navigate({
        pathname: location.pathname,
        search: next.toString()
      });
    },
    [navigate, location.pathname, location.search]
  );

  const currentTab =
    query.get('reports_tab') === null ? TAB_DATA[0] : query.get('reports_tab');

  return (
    <div className="reports">
      <div className="reports__header">
        <div>
          <div className="reports__header-title">Reports</div>
          <ActionTab
            className="reports__header-tab"
            data={TAB_DATA}
            onSelect={handleTab}
            select={currentTab ?? undefined}
          />
        </div>
        <div className="reports__header-end">
          <div className="reports__header-btn">Lorem</div>
          <div className="reports__header-btn">Lorem</div>
        </div>
      </div>
      <div className="reports__content">
        <div className="reports__item">
          <div className="reports__item-title">Lorem ipsum</div>
          <div className="reports__item-root">
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <div className="reports__tool-arrow reports__tool-arrow--left">
              <i className="fas fa-chevron-left" aria-hidden />
            </div>
            <div className="reports__tool-arrow reports__tool-arrow--right">
              <i className="fas fa-chevron-right" aria-hidden />
            </div>
          </div>
        </div>
        <div className="reports__item">
          <div className="reports__item-title">Lorem ipsum</div>
          <div className="reports__item-root">
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <img src={reportCard} alt="report" />
            <div className="reports__tool-arrow reports__tool-arrow--left">
              <i className="fas fa-chevron-left" aria-hidden />
            </div>
            <div className="reports__tool-arrow reports__tool-arrow--right">
              <i className="fas fa-chevron-right" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
