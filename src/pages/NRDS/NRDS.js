import { useLocation, useNavigate } from "react-router-dom";
import Basic from "./component/Basic/Basic";
import Database from "./component/Database/Database";
import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import "./NRDS.css";

function NRDS() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tabData = ["NRD's", "Database", "Archive"];

  const handleTab = (_tab) => {
    query.set("nrds_tab", _tab);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  return (
    <>
      <div className="nrdsRoot">
        <div className="nrdsTitle">NRD's</div>
        <div className="nrdsHeaderRoot">
          <ActionTab
            className="nrdsHeaderTab"
            data={tabData}
            onSelect={(item) => handleTab(item)}
            select={ query.get("nrds_tab") === null ?tabData[0]: query.get("nrds_tab")}
          />
          <PlusButton content="+ New keyword" action={() => {}} />
        </div>
        {query.get("nrds_tab") === tabData[0] ||
        query.get("nrds_tab") === null ? (
          <Basic />
        ) : query.get("nrds_tab") === tabData[1] ? (
          <Database />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default NRDS;
