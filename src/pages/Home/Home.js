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
          <div className="inline">
            <HomeCard
              className="homeCard"
              cardType="boycott"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
            <HomeCard
              className="lastHomeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
          </div>
          <div className="inline">
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
            <HomeCard
              className="lastHomeCard"
              cardType="event"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
              commitCount="2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
