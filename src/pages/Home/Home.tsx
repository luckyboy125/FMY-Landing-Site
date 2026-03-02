import { useState, useCallback } from 'react';
import HomeCard from './component/HomeCard/HomeCard';
import NewUpdateModal from './component/NewUpdateModal/NewUpdateModal';
import PlusButton from '../../components/PlusButton/PlusButton';
import ActionButton from '../../components/ActionButton/ActionButton';
import CustomizeInlineChart from '../../components/CustomizeInlineChart/CustomizeInlineChart';
import handImage from '../../asset/images/hand.svg';
import './Home.css';

const COMPARE_OPTIONS = ['This Week', 'Custom'];

function Home() {
  const [modalShow, setModalShow] = useState(false);

  const openModal = useCallback(() => setModalShow(true), []);
  const closeModal = useCallback(() => setModalShow(false), []);

  return (
    <div className="home">
      <div className="home__header">
        <div>
          <p className="home__greeting">
            Hello, Nimrod <img src={handImage} alt="hand" />
          </p>
          <p className="home__subtitle">Here are today's updates.</p>
        </div>
        <PlusButton
          content="+ New update"
          action={openModal}
          className="home__primary-btn"
        />
        <NewUpdateModal show={modalShow} onClose={closeModal} />
      </div>
      <div className="home__toolbar">
        <ActionButton
          name="Show"
          content="This Week"
          className="home__filter-btn"
          panelClassName="home__dropdown"
          panelContent={
            <>
              {COMPARE_OPTIONS.map((item, index) => (
                <div key={`${item}-${index}`} className="home__dropdown-item">
                  {item}
                </div>
              ))}
            </>
          }
        />
        <CustomizeInlineChart />
      </div>
      <div className="home__content">
        <div className="home__row">
          <HomeCard
            className="home__card"
            cardType="boycott"
            commentType="boycott"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
          <HomeCard
            className="home__card"
            cardType="newupdate"
            commentType="newupdate"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
          <HomeCard
            className="home__card"
            cardType="newupdate"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
        </div>
        <div className="home__row">
          <HomeCard
            className="home__card"
            cardType="newupdate"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
          <HomeCard
            className="home__card"
            cardType="newupdate"
            cardContent="Hezbollah called out for boycotting the elections in Bahrain"
            author="Nimrod Ben Efraim"
            cardDate="31 October 2022"
          />
          <HomeCard
            className="home__card"
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
