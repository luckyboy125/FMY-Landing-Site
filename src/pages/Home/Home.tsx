import { useState, useCallback } from 'react';
import HomeCard from './component/HomeCard/HomeCard';
import NewUpdateModal from './component/NewUpdateModal/NewUpdateModal';
import PlusButton from '../../components/PlusButton/PlusButton';
import ActionButton from '../../components/ActionButton/ActionButton';
import CustomizeInlineChart from '../../components/CustomizeInlineChart/CustomizeInlineChart';
import handImage from '../../asset/images/hand.svg';
import './Home.css';

const COMPARE_OPTIONS = ['This Week', 'Custom'];

function Home(): JSX.Element {
  const [modalShow, setModalShow] = useState(false);

  const openModal = useCallback(() => setModalShow(true), []);
  const closeModal = useCallback(() => setModalShow(false), []);

  return (
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
          action={openModal}
          className="homeBtn"
        />
        <NewUpdateModal show={modalShow} onClose={closeModal} />
      </div>
      <div className="lineRoot">
        <ActionButton
          name="Show"
          content="This Week"
          className="lineBtn"
          dropRootStyle="childRoot"
          dropRoot={
            <>
              {COMPARE_OPTIONS.map((item, index) => (
                <div key={`${item}-${index}`} className="item">
                  {item}
                </div>
              ))}
            </>
          }
        />
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
            className="homeCard"
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
            className="homeCard"
            cardType="event"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
