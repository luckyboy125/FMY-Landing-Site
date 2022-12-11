import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./asset/fonts/helvetica_medium.ttf";
import "./asset/fonts/Helvetica-Bold.ttf";
import "./asset/fonts/Helvetica-BoldOblique.ttf";
import "./asset/fonts/helvetica-light-587ebe5a59211.ttf";
import "./asset/fonts/Helvetica.ttf";
import "./asset/fonts/Helvetica-Oblique.ttf";
import { useEffect, useState } from "react";
import { useWindowDimensions, adjustContainer } from "./useWindowDimensions";
import WebAnalysisItems from "./pages/WebAnalysisItems/WebAnalysisItems";
import { Row, Col, Container } from "react-bootstrap";
import SideTaskBar from "./components/SideTaskBar";
import TopTaskBar from "./components/TopTaskBar";
import Tasks from "./pages/Tasks/Tasks";

//DONT TOUCH THIS FILE

//static screen ratio dimentions
export const staticWidth = 2250;
export const staticHeight = 1250;

function App() {
  //get current screen dimentions
  const { height, width } = useWindowDimensions();

  //deal with every change in dimentions to keep the screen ratio
  useEffect(() => {
    adjustContainer(height, width);
  }, [height, width]);

  return (
    <div className="outer">
      <div className="middle">
        <div className="websiteContainer">
          <TopTaskBar />
          <Row>
            <Col sm={3} className="position-fixed flex-fill" id="sidebarCol">
              <SideTaskBar />
            </Col>
            <Col sm={9} className="content">
              {/* <WebAnalysisItems /> */}
              <Tasks />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
