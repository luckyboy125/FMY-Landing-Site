import HomeCard from "./component/HomeCard";
import PlusButton from "../../components/PlusButton/PlusButton";
import ActionButton from "../../components/ActionButton/ActionButton";
import CustomizeInlineChart from "../../components/CustomizeInlineChart/CustomizeInlineChart";
import handImage from "../../asset/images/hand.svg";
import "./Home.css";

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
            content="+ New update"
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
              commentType="boycott"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              commentType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
            <HomeCard
              className="lastHomeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
          </div>
          <div className="inline">
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
            <HomeCard
              className="homeCard"
              cardType="newupdate"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
            <HomeCard
              className="lastHomeCard"
              cardType="event"
              cardContent="Hezbollah called out for boycotting the elections in Bahrain"
              author="Nimrod Ben Efraim"
              cardDate="31 October 2022"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
