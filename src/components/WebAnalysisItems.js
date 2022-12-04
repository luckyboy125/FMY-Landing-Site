import Button from "./Button/Button";
import "./WebAnalysisItem.css";

function WebAnalysisItems() {
  return (
    <div className="webAnalysisRoot">
      <div className="chartContainer">
        <div className="chartHeader">
          <div className="databasePart">
            <div className="headerItemTitle">Database Items</div>
            <div className="chartTools">
              <Button />
            </div>
          </div>
          <div className="casesPart">
            <div className="headerItemTitle">Cases</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAnalysisItems;
