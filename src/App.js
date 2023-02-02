import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useWindowDimensions, adjustContainer } from "./useWindowDimensions";
import Home from "./pages/Home/Home";
import NRDS from "./pages/NRDS/NRDS";
import Tasks from "./pages/Tasks/Tasks";
import Login from "./pages/Login/Login";
import Cases from "./pages/Cases/Cases";
import Reports from "./pages/Reports/Reports";
import Database from "./pages/Database/Database";
import Networks from "./pages/Networks/Networks";
import Government from "./pages/Government/Government";
import CheckLists from "./pages/CheckListPage/CheckLists";
import Investigation from "./pages/Investigation/Investigation";
import WebAnalysisItems from "./pages/WebAnalysisItems/WebAnalysisItems";
import TopTaskBar from "./components/TopTaskBar/TopTaskBar";
import SideTaskBar from "./components/SideTaskBar/SideTaskBar";
import "./asset/fonts/Helvetica.ttf";
import "./asset/fonts/Helvetica-Bold.ttf";
import "./asset/fonts/helvetica_neue.ttf";
import "./asset/fonts/helvetica_medium.ttf";
import "./asset/fonts/Helvetica-Oblique.ttf";
import "./asset/fonts/Helvetica-BoldOblique.ttf";
import "./asset/fonts/helvetica-light-587ebe5a59211.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//DONT TOUCH THIS FILE

//static screen ratio dimentions
export const staticWidth = 2250;
export const staticHeight = 1250;

function App() {
  //get current screen dimentions
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { height, width } = useWindowDimensions();

  //deal with every change in dimentions to keep the screen ratio
  useEffect(() => {
    adjustContainer(
      height,
      width,
      isLoggedIn ? "websiteContainer" : "loginContainer"
    );
  }, [height, width]);

  return (
    <Router>
      <div className="outer">
        <div className="middle">
          <div
            className={`${isLoggedIn ? "websiteContainer" : "loginContainer"}`}
          >
            {isLoggedIn ? (
              <>
                <TopTaskBar />
                <Row>
                  <Col
                    sm={3}
                    className="position-fixed flex-fill"
                    id="sidebarCol"
                  >
                    <SideTaskBar />
                  </Col>
                  <Col sm={9} className="content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/nrds" element={<NRDS />} />
                      <Route path="/government" element={<Government />} />
                      <Route path="/dashboard" element={<WebAnalysisItems />} />
                      <Route path="/tasks" element={<Tasks />} />
                      <Route path="/CheckLists" element={<CheckLists />} />
                      <Route path="/cases" element={<Cases />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/database" element={<Database />} />
                      <Route
                        path="/investigation"
                        element={<Investigation />}
                      />
                      <Route path="/networks" element={<Networks />} />
                    </Routes>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Login onSubmit={() => setIsLoggedIn(true)} />
              </>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
