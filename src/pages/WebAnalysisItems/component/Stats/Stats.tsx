import ChartLayout from '../../../../components/ChartLayout/ChartLayout';
import ActionButton from '../../../../components/ActionButton/ActionButton';
import './Stats.css';

function Stats() {
  return (
    <ChartLayout
      title="Stats"
      headerAction={<ActionButton name="Show" content="All" className="stats__btn" />}
      className="stats"
    >
      <div
        className="stats__items"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}
      >
        <div
          className="stats__item"
          style={{ borderRight: '1px solid rgba(255, 255, 255, 0.5)' }}
        >
          <div className="stats__item-count">1.7k</div>
          <div className="stats__item-description">Flagged posts</div>
          <div className="stats__item-percent">+12%</div>
        </div>
        <div className="stats__item--right">
          <div className="stats__item-count">1.7k</div>
          <div className="stats__item-description">Flagged posts</div>
          <div className="stats__item-percent">+12%</div>
        </div>
      </div>
      <div className="stats__items">
        <div
          className="stats__item"
          style={{ borderRight: '1px solid rgba(255, 255, 255, 0.5)' }}
        >
          <div className="stats__item-count">1.7k</div>
          <div className="stats__item-description">Flagged posts</div>
          <div className="stats__item-percent">+12%</div>
        </div>
        <div className="stats__item--right">
          <div className="stats__item-count">1.7k</div>
          <div className="stats__item-description">Flagged posts</div>
          <div className="stats__item-percent">+12%</div>
        </div>
      </div>
    </ChartLayout>
  );
}

export default Stats;
