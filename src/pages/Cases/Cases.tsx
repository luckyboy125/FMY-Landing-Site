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
  { category: 'Ability', amount: 0.28 },
  { category: 'Adventure', amount: 0.55 },
  { category: 'Balance', amount: 0.43 },
  { category: 'Beauty', amount: 0.31 },
  { category: 'Bravery', amount: 0.81 },
  { category: 'Change', amount: 0.53 },
  { category: 'Courage', amount: 0.19 },
  { category: 'Dream', amount: 0.28 },
  { category: 'Energy', amount: 0.55 },
  { category: 'Explore', amount: 0.55 },
  { category: 'Imagination', amount: 0.55 },
  { category: 'Happiness', amount: 0.55 },
  { category: 'Magic', amount: 0.55 },
  { category: 'Passion', amount: 0.55 },
  { category: 'Respect', amount: 0.55 },
  { category: 'Traffic', amount: 0.43 },
  { category: 'Government', amount: 0.99, link: 'government' },
  { category: 'Future', amount: 0.31 },
  { category: 'Focus', amount: 0.81 },
  { category: 'Comfort', amount: 0.53 },
  { category: 'Generosity', amount: 0.19 },
  { category: 'Ipsum', amount: 0.87 },
  { category: 'Service', amount: 0.59, link: 'cases?cases_tab=Service' },
  { category: 'Nature', amount: 0.28 },
  { category: 'Knowledge', amount: 0.55 },
  { category: 'Army', amount: 0.27, link: 'army' },
  { category: 'Create', amount: 0.43 },
  { category: 'Learning', amount: 0.91 },
  { category: 'Curiosity', amount: 0.81 },
  { category: 'Journey', amount: 0.87 },
  { category: 'Wisdom', amount: 0.28 },
  { category: 'Peace', amount: 0.55 },
  { category: 'Love', amount: 0.43 },
  { category: 'Strength', amount: 0.91 },
  { category: 'Patience', amount: 0.81 },
  { category: 'Vision', amount: 0.81 }
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
    <div className="cases">
      <div className="cases__title">Cases</div>
      <div className="cases__header">
        <ActionTab
          className="cases__tabs"
          data={[...TAB_DATA]}
          onSelect={handleTab}
          select={currentTab ?? undefined}
        />
        <div className="cases__header-actions">
          <SearchInput
            action={(e) => setSearchValue(e.target.value)}
            inputValue={searchValue}
            className="cases__search"
          />
          <PlusButton
            content="+ New case"
            className="cases__primary-btn"
            action={() => {}}
          />
        </div>
      </div>
      <div className="cases__content">
        {currentTab === TAB_DATA[0] ? (
          <div ref={chartContainerRef} className="cases__chart-wrap">
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
