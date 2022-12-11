import Button from "../../../../components/Button/Button";
import ChartLayout from "../../../../components/ChartLayout/ChartLayout";
import "./Stats.css";

function Stats() {
  return (
    <ChartLayout
      name="Stats"
      button={<Button name="Show" content="All" />}
      className="stats"
    >
      <div className="statsItems borderBottom">
        <div className="statsItem borderRight">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
        <div className="statsItem">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
      </div>
      <div className="statsItems">
        <div className="statsItem borderRight">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
        <div className="statsItem">
          <div className="statsItemCount">1.7k</div>
          <div className="statsItemDes">Flagged posts</div>
          <div className="statsItemPercent">+12%</div>
        </div>
      </div>
    </ChartLayout>
  );
}

export default Stats;
