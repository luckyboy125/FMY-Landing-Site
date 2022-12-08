import Button from "react-bootstrap/Button";
import TasksLogo from "./Logos/TasksLogo.svg";
import FmyLogo from "./Logos/FmyLogo.svg";
import HomeLogo from "./Logos/HomeLogo.svg";
import DashboardLogo from "./Logos/DashboardLogo.svg";
import "./SideTaskBar.css";

function SideTaskBar() {
  return (
    <div className="sideTaskBar">
      <img src={FmyLogo} className="fmyLogo" alt="fmyLogo"></img>

      <div className="taskBarPagesButtons">
        <Button className="taskBarButton active">
          <img src={HomeLogo} alt=""></img>
          Home
        </Button>
        <Button className="taskBarButton">
          <img src={DashboardLogo} alt=""></img>
          Dashboard
        </Button>

        <div className="dividerLine"></div>

        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Database
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Investigation
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Cases
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Networks
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          NRDS
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          News
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Tasks
        </Button>

        <div className="dividerLine"></div>

        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Reports
        </Button>
        <Button className="taskBarButton">
          <img src={TasksLogo} alt=""></img>
          Insights
        </Button>

        <div className="dividerLine"></div>

        <div className="bottomSideBar">
          <div className="dividerLine"></div>

          <Button className="taskBarButton">
            <img src={TasksLogo} alt=""></img>
            Settings
          </Button>
          <Button className="taskBarButton">
            <img src={TasksLogo} alt=""></img>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideTaskBar;
