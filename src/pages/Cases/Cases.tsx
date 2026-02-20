import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Service from './component/Service/Service';
import Comparison from './component/Comparison/Comparison';
import BubbleChart from './component/BubbleChart/BubbleChart';
import type { BubbleDatum } from './component/BubbleChart/BubbleChart';
import ActionTab from '../../components/ActionTab/ActionTab';
import PlusButton from '../../components/PlusButton/PlusButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import './Cases.css';

const DEFAULT_CHART_WIDTH = 800;
const DEFAULT_CHART_HEIGHT = 500;

const TAB_DATA = ['All', 'Case Comparison', 'Service'] as const;

const RAW_DATA: BubbleDatum[] = [
  { category: 'Lorem', amount: 0.28 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.43 },
  { category: 'Lorem', amount: 0.31 },
  { category: 'Lorem', amount: 0.81 },
  { category: 'Lorem', amount: 0.53 },
  { category: 'Lorem', amount: 0.19 },
  { category: 'Lorem', amount: 0.28 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'Lorem', amount: 0.55 },
  { category: 'LoremTestLongWordsdf', amount: 0.43 },
  { category: 'Government', amount: 0.99, link: 'government' },
  { category: 'Lorem', amount: 0.31 },
  { category: 'Lorem', amount: 0.81 },
  { category: 'Lorem', amount: 0.53 },
  { category: 'Lorem', amount: 0.19 },
  { category: 'Ipsum', amount: 0.87 },
  { category: 'Service', amount: 0.59, link: 'cases?cases_tab=Service' },
  { category: 'Ipsum', amount: 0.28 },
  { category: 'Ipsum', amount: 0.55 },
  { category: 'ArmyLongWordTest', amount: 0.27, link: 'army' },
  { category: 'Ipsum', amount: 0.43 },
  { category: 'Ipsum', amount: 0.91 },
  { category: 'Ipsum', amount: 0.81 },
  { category: 'Ipsum', amount: 0.87 },
  { category: 'Ipsum', amount: 0.28 },
  { category: 'Ipsum', amount: 0.55 },
  { category: 'Ipsum', amount: 0.43 },
  { category: 'Ipsum', amount: 0.91 },
  { category: 'Ipsum', amount: 0.81 },
  { category: 'Ipsum', amount: 0.81 }
];

function Cases() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState('');
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState({
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT
  });

  useEffect(() => {
    const el = chartContainerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width > 0 && height > 0) {
        setChartSize({ width: Math.floor(width), height: Math.floor(height) });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTab = useCallback(
    (tab: string) => {
      const next = new URLSearchParams(location.search);
      next.set('cases_tab', tab);
      navigate({
        pathname: location.pathname,
        search: next.toString()
      });
    },
    [navigate, location.pathname, location.search]
  );

  const currentTab =
    query.get('cases_tab') === null ? TAB_DATA[0] : query.get('cases_tab');

  return (
    <div className="casesRoot">
      <div className="casesTitle">Cases</div>
      <div className="casesHeaderRoot">
        <ActionTab
          className="casesTab"
          data={[...TAB_DATA]}
          onSelect={handleTab}
          select={currentTab ?? undefined}
        />
        <div className="lastItemRoot">
          <SearchInput
            action={(e) => setSearchValue(e.target.value)}
            inputValue={searchValue}
            className="caseSearchInput"
          />
          <PlusButton
            content="+ New case"
            className="casesHeaderBtn"
            action={() => {}}
          />
        </div>
      </div>
      <div className="casesContainer">
        {currentTab === TAB_DATA[0] ? (
          <div ref={chartContainerRef} className="casesChartWrapper">
            <BubbleChart
              data={RAW_DATA}
              width={chartSize.width}
              height={chartSize.height}
            />
          </div>
        ) : currentTab === TAB_DATA[1] ? (
          <Comparison />
        ) : (
          <Service />
        )}
      </div>
    </div>
  );
}

export default Cases;
