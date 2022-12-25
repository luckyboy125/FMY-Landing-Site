import ActionButton from "../../../../components/ActionButton/ActionButton";
import ChartLayout from "../../../../components/ChartLayout/ChartLayout";
import "./Stats.css";

function Stats() {
  return (
    <ChartLayout
      name="Stats"
      button={<ActionButton name="Show" content="All" className="statsBtn" />}
      className="stats"
    >
      <div
        className="statsItems"
        style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.5)" }}
      >
        <div
          className="statsItem"
          style={{
            borderRight: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
        <div className="statsItemRight">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
      </div>
      <div className="statsItems">
        <div
          className="statsItem"
          style={{ borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}
        >
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
        <div className="statsItemRight">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
      </div>
    </ChartLayout>
  );
}

export default Stats;
