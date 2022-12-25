import { useState } from "react";
import PlusButton from "../../components/PlusButton/PlusButton";
import handImage from "../../asset/images/hand.svg";
import "./Home.css";
import ActionButton from "../../components/ActionButton/ActionButton";
import CustomizeInlineChart from "../../components/CustomizeInlineChart/CustomizeInlineChart";
import HomeCard from "./component/HomeCard";

function Home() {
  return (
    <>
      <div className="homeRoot">
        <div className="homeHeader">
          <div>
            <p className="homeHello">
              Hello, Nimrod <img src={handImage} alt="hand" />
            </p>
            <p className="homeHeaderDes">Here are today's updates.</p>
          </div>
          <PlusButton
            content="+ New task"
            action={() => {}}
            className="homeBtn"
          />
        </div>
        <div className="lineRoot">
          <ActionButton name="Show" content="This Week" className="lineBtn" />
          <CustomizeInlineChart />
        </div>
        <div className="mainContentRoot">
          <HomeCard className="homeCard" />
          <HomeCard className="homeCard" />
          <HomeCard className="homeCard" />
        </div>
      </div>
    </>
  );
}

export default Home;
