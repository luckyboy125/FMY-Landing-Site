import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FmyLogo from "../../asset/sidebar/FmyLogo.svg";
import HomeLogo from "../../asset/sidebar/HomeLogo.svg";
import ExitLogo from "../../asset/sidebar/ExitLogo.svg";
import NrdsLogo from "../../asset/sidebar/NrdsLogo.svg";
import CasesLogo from "../../asset/sidebar/CasesLogo.svg";
import TasksLogo from "../../asset/sidebar/TasksLogo.svg";
import DatabaseLogo from "../../asset/sidebar/DatabaseLogo.svg";
import InsightsLogo from "../../asset/sidebar/InsightsLogo.svg";
import NetworksLogo from "../../asset/sidebar/NetworksLogo.svg";
import ReportsLogo from "../../asset/sidebar/ReportsLogo.svg";
import SettingsLogo from "../../asset/sidebar/SettingsLogo.svg";
import DashboardLogo from "../../asset/sidebar/DashboardLogo.svg";
import ChecklistsLogo from "../../asset/sidebar/ChecklistsLogo.svg";
import InvestigationLogo from "../../asset/sidebar/InvestigationLogo.svg";
import "./SideTaskBar.css";

function SideTaskBar(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const go = useCallback(
    (path: string) => () => {
      navigate(path);
    },
    [navigate]
  );

  const reload = useCallback(() => {
    window.location.reload();
  }, []);

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div className="sideTaskBar">
      <img
        src={FmyLogo}
        className="fmyLogo"
        alt="fmyLogo"
        onClick={reload}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && reload()}
      />

      <div className="taskBarPagesButtons">
        <Button
          className={`taskBarButton ${isActive("/") ? "active" : ""}`}
          onClick={go("/")}
        >
          <img src={HomeLogo} alt="" />
          Home
        </Button>
        <Button
          className={`taskBarButton ${isActive("/dashboard") ? "active" : ""}`}
          onClick={go("/dashboard")}
        >
          <img src={DashboardLogo} alt="" />
          Dashboard
        </Button>

        <div className="dividerLine" />

        <Button
          className={`taskBarButton ${isActive("/database") ? "active" : ""}`}
          onClick={go("/database")}
        >
          <img src={DatabaseLogo} alt="" />
          Database
        </Button>
        <Button
          className={`taskBarButton ${isActive("/investigation") ? "active" : ""}`}
          onClick={go("/investigation")}
        >
          <img src={InvestigationLogo} alt="" />
          Investigation
        </Button>
        <Button
          className={`taskBarButton ${isActive("/cases") ? "active" : ""}`}
          onClick={go("/cases")}
        >
          <img src={CasesLogo} alt="" />
          Cases
        </Button>
        <Button
          className={`taskBarButton ${isActive("/networks") ? "active" : ""}`}
          onClick={go("/networks")}
        >
          <img src={NetworksLogo} alt="" />
          Networks
        </Button>
        <Button
          className={`taskBarButton ${isActive("/nrds") ? "active" : ""}`}
          onClick={go("/nrds")}
        >
          <img src={NrdsLogo} alt="" />
          NRDS
        </Button>
        <Button
          className={`taskBarButton ${isActive("/tasks") ? "active" : ""}`}
          onClick={go("/tasks")}
        >
          <img src={TasksLogo} alt="" />
          Tasks
        </Button>
        <Button
          className={`taskBarButton ${isActive("/CheckLists") ? "active" : ""}`}
          onClick={go("/CheckLists")}
        >
          <img src={ChecklistsLogo} alt="" />
          Checklists
        </Button>

        <div className="dividerLine" />

        <Button
          className={`taskBarButton ${isActive("/reports") ? "active" : ""}`}
          onClick={go("/reports")}
        >
          <img src={ReportsLogo} alt="" />
          Reports
        </Button>
        <Button
          className={`taskBarButton ${isActive("/insights") ? "active" : ""}`}
        >
          <img src={InsightsLogo} alt="" />
          Insights
        </Button>

        <div className="dividerLine" />

        <div className="bottomSideBar">
          <div className="dividerLine" />

          <Button
            className={`taskBarButton ${isActive("/settings") ? "active" : ""}`}
          >
            <img src={SettingsLogo} alt="" />
            Settings
          </Button>
          <Button className="taskBarButton">
            <img src={ExitLogo} alt="" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideTaskBar;
