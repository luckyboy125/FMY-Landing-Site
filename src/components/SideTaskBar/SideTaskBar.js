import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FmyLogo from "../../asset/sidebar/FmyLogo.svg";
import HomeLogo from "../../asset/sidebar/HomeLogo.svg";
import ExitLogo from "../../asset/sidebar/ExitLogo.svg";
import NrdsLogo from "../../asset/sidebar/NrdsLogo.svg";
import CasesLogo from "../../asset/sidebar/CasesLogo.svg";
import TasksLogo from "../../asset/sidebar/TasksLogo.svg";
// import NewsLogo from "../../asset/sidebar/NewsLogo.svg";
// import SearchLogo from "../../asset/sidebar/SearchLogo.svg";
import DatabaseLogo from "../../asset/sidebar/DatabaseLogo.svg";
import InsightsLogo from "../../asset/sidebar/InsightsLogo.svg";
import NetworksLogo from "../../asset/sidebar/NetworksLogo.svg";
import ReportsLogo from "../../asset/sidebar/ReportsLogo.svg";
import SettingsLogo from "../../asset/sidebar/SettingsLogo.svg";
import DashboardLogo from "../../asset/sidebar/DashboardLogo.svg";
import ChecklistsLogo from "../../asset/sidebar/ChecklistsLogo.svg";
import InvestigationLogo from "../../asset/sidebar/InvestigationLogo.svg";
import "./SideTaskBar.css";

function SideTaskBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sideTaskBar">
      <img
        src={FmyLogo}
        className="fmyLogo"
        alt="fmyLogo"
        onClick={() => window.location.reload()}
      />

      <div className="taskBarPagesButtons">
        <Button
          className={`taskBarButton ${location.pathname === "/" && "active"}`}
          onClick={() => navigate("/")}
        >
          <img src={HomeLogo} alt=""></img>
          Home
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/dashboard" && "active"
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <img src={DashboardLogo} alt=""></img>
          Dashboard
        </Button>

        <div className="dividerLine"></div>

        <Button
          className={`taskBarButton ${
            location.pathname === "/database" && "active"
          }`}
          onClick={() => navigate("/database")}
        >
          <img src={DatabaseLogo} alt=""></img>
          Database
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/investigation" && "active"
          }`}
          onClick={() => navigate("/investigation")}
        >
          <img src={InvestigationLogo} alt=""></img>
          Investigation
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/cases" && "active"
          }`}
          onClick={() => navigate("/cases")}
        >
          <img src={CasesLogo} alt=""></img>
          Cases
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/networks" && "active"
          }`}
          onClick={() => navigate("/networks")}
        >
          <img src={NetworksLogo} alt=""></img>
          Networks
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/nrds" && "active"
          }`}
          onClick={() => navigate("/nrds")}
        >
          <img src={NrdsLogo} alt=""></img>
          NRDS
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/tasks" && "active"
          }`}
          onClick={() => navigate("/tasks")}
        >
          <img src={TasksLogo} alt=""></img>
          Tasks
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/checklists" && "active"
          }`}
          onClick={() => navigate("/checklists")}
        >
          <img src={ChecklistsLogo} alt=""></img>
          Checklists
        </Button>

        <div className="dividerLine"></div>

        <Button
          className={`taskBarButton ${
            location.pathname === "/reports" && "active"
          }`}
          onClick={() => navigate("/reports")}
        >
          <img src={ReportsLogo} alt=""></img>
          Reports
        </Button>
        <Button
          className={`taskBarButton ${
            location.pathname === "/insights" && "active"
          }`}
        >
          <img src={InsightsLogo} alt=""></img>
          Insights
        </Button>

        <div className="dividerLine"></div>

        <div className="bottomSideBar">
          <div className="dividerLine"></div>

          <Button
            className={`taskBarButton ${
              location.pathname === "/settings" && "active"
            }`}
          >
            <img src={SettingsLogo} alt=""></img>
            Settings
          </Button>
          <Button className={`taskBarButton`}>
            <img src={ExitLogo} alt=""></img>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideTaskBar;
