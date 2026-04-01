import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FmyLogo from '../../asset/sidebar/FmyLogo.svg';
import HomeLogo from '../../asset/sidebar/HomeLogo.svg';
import ExitLogo from '../../asset/sidebar/ExitLogo.svg';
import NrdsLogo from '../../asset/sidebar/NrdsLogo.svg';
import CasesLogo from '../../asset/sidebar/CasesLogo.svg';
import TasksLogo from '../../asset/sidebar/TasksLogo.svg';
import DatabaseLogo from '../../asset/sidebar/DatabaseLogo.svg';
import InsightsLogo from '../../asset/sidebar/InsightsLogo.svg';
import NetworksLogo from '../../asset/sidebar/NetworksLogo.svg';
import ReportsLogo from '../../asset/sidebar/ReportsLogo.svg';
import SettingsLogo from '../../asset/sidebar/SettingsLogo.svg';
import DashboardLogo from '../../asset/sidebar/DashboardLogo.svg';
import ChecklistsLogo from '../../asset/sidebar/ChecklistsLogo.svg';
import InvestigationLogo from '../../asset/sidebar/InvestigationLogo.svg';
import './SideTaskBar.css';

function SideTaskBar() {
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
    <div className="side-task-bar">
      <img
        src={FmyLogo}
        className="side-task-bar__logo"
        alt="fmyLogo"
        onClick={reload}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && reload()}
      />

      <div className="side-task-bar__nav">
        <Button
          className={`side-task-bar__button ${isActive('/') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/')}
        >
          <img src={HomeLogo} alt="" />
          Home
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/dashboard') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/dashboard')}
        >
          <img src={DashboardLogo} alt="" />
          Dashboard
        </Button>

        <div className="side-task-bar__divider" />

        <Button
          className={`side-task-bar__button ${isActive('/database') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/database')}
        >
          <img src={DatabaseLogo} alt="" />
          Database
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/investigation') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/investigation')}
        >
          <img src={InvestigationLogo} alt="" />
          Investigation
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/cases') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/cases')}
        >
          <img src={CasesLogo} alt="" />
          Cases
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/networks') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/networks')}
        >
          <img src={NetworksLogo} alt="" />
          Networks
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/nrds') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/nrds')}
        >
          <img src={NrdsLogo} alt="" />
          NRDS
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/tasks') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/tasks')}
        >
          <img src={TasksLogo} alt="" />
          Tasks
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/CheckLists') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/CheckLists')}
        >
          <img src={ChecklistsLogo} alt="" />
          Checklists
        </Button>

        <div className="side-task-bar__divider" />

        <Button
          className={`side-task-bar__button ${isActive('/reports') ? 'side-task-bar__button--active' : ''}`}
          onClick={go('/reports')}
        >
          <img src={ReportsLogo} alt="" />
          Reports
        </Button>
        <Button
          className={`side-task-bar__button ${isActive('/insights') ? 'side-task-bar__button--active' : ''}`}
        >
          <img src={InsightsLogo} alt="" />
          Insights
        </Button>

        <div className="side-task-bar__divider" />

        <div className="side-task-bar__bottom">
          <div className="side-task-bar__divider" />

          <Button
            className={`side-task-bar__button ${isActive('/settings') ? 'side-task-bar__button--active' : ''}`}
          >
            <img src={SettingsLogo} alt="" />
            Settings
          </Button>
          <Button className="side-task-bar__button">
            <img src={ExitLogo} alt="" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideTaskBar;
