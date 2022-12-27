import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TasksLogo from "../../asset/sidebar/TasksLogo.svg";
import FmyLogo from "../../asset/sidebar/FmyLogo.svg";
import DashboardLogo from "../../asset/sidebar/DashboardLogo.svg";
import HomeLogo from "../../asset/sidebar/HomeLogo.svg";
import CasesLogo from "../../asset/sidebar/CasesLogo.svg";
import ChecklistsLogo from "../../asset/sidebar/ChecklistsLogo.svg";
import DatabaseLogo from "../../asset/sidebar/DatabaseLogo.svg";
import ExitLogo from "../../asset/sidebar/ExitLogo.svg";
import InsightsLogo from "../../asset/sidebar/InsightsLogo.svg";
import InvestigationLogo from "../../asset/sidebar/InvestigationLogo.svg";
import NetworksLogo from "../../asset/sidebar/NetworksLogo.svg";
import NewsLogo from "../../asset/sidebar/NewsLogo.svg";
import NrdsLogo from "../../asset/sidebar/NrdsLogo.svg";
import ReportsLogo from "../../asset/sidebar/ReportsLogo.svg";
import SearchLogo from "../../asset/sidebar/SearchLogo.svg";
import SettingsLogo from "../../asset/sidebar/SettingsLogo.svg";
import "./SideTaskBar.css";

function SideTaskBar() {
  const navigate = useNavigate();
  return (
    <div className="sideTaskBar">
      <img
        src={FmyLogo}
        className="fmyLogo"
        alt="fmyLogo"
        onClick={() => window.location.reload()}
      ></img>

      <div className="taskBarPagesButtons">
        <Button className="taskBarButton active" onClick={() => navigate("/")}>
          <img src={HomeLogo} alt=""></img>
          Home
        </Button>
        <Button
          className="taskBarButton"
          onClick={() => navigate("/dashboard")}
        >
          <img src={DashboardLogo} alt=""></img>
          Dashboard
        </Button>

        <div className="dividerLine"></div>

        <Button className="taskBarButton">
          <img src={DatabaseLogo} alt=""></img>
          Database
        </Button>
        <Button className="taskBarButton">
          <img src={InvestigationLogo} alt=""></img>
          Investigation
        </Button>
        <Button className="taskBarButton" onClick={() => navigate("/cases")}>
          <img src={CasesLogo} alt=""></img>
          Cases
        </Button>
        <Button className="taskBarButton">
          <img src={NetworksLogo} alt=""></img>
          Networks
        </Button>
        <Button className="taskBarButton" onClick={() => navigate("/nrds")}>
          <img src={NrdsLogo} alt=""></img>
          NRDS
        </Button>
        <Button className="taskBarButton" onClick={() => navigate("/tasks")}>
          <img src={TasksLogo} alt=""></img>
          Tasks
        </Button>
        <Button
          className="taskBarButton"
          onClick={() => navigate("/checklists")}
        >
          <img src={ChecklistsLogo} alt=""></img>
          Checklists
        </Button>

        <div className="dividerLine"></div>

        <Button className="taskBarButton">
          <img src={ReportsLogo} alt=""></img>
          Reports
        </Button>
        <Button className="taskBarButton">
          <img src={InsightsLogo} alt=""></img>
          Insights
        </Button>

        <div className="dividerLine"></div>

        <div className="bottomSideBar">
          <div className="dividerLine"></div>

          <Button className="taskBarButton">
            <img src={SettingsLogo} alt=""></img>
            Settings
          </Button>
          <Button className="taskBarButton">
            <img src={ExitLogo} alt=""></img>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideTaskBar;
