import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hook/DetectOutsideClick";
import HomeCard from "./component/HomeCard";
import PlusButton from "../../components/PlusButton/PlusButton";
import ActionButton from "../../components/ActionButton/ActionButton";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import CustomizeInlineChart from "../../components/CustomizeInlineChart/CustomizeInlineChart";
import handImage from "../../asset/images/hand.svg";
import CloseIcon from "../../asset/images/close_icon.svg";
import "./Home.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const compare = ["This Week", "Custom"];
  const [modalShow, setModalShow] = useState(false);
  const [attachLinkValue, setAttachLinkValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [categorySelectShow, setCategorySelectShow] = useState(false);
  const categorySelectRef = useOutsideClick(() => setCategorySelectShow(false));
  const categorySelect = [
    "News update",
    "Event",
    "Human rights",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const handlCategory = (category) => {
    query.set("newupdate_category", category);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
    setCategorySelectShow(false);
  };

  const [caseValue, setCaseValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

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
          action={() => setModalShow(true)}
          className="homeBtn"
        />
      </div>
      <div className="lineRoot">
        <ActionButton
          name="Show"
          content="This Week"
          className="lineBtn"
          dropRootStyle="childRoot"
          dropRoot={
            <>
              {compare?.map((item, index) => {
                return (
                  <div key={index} className="item">
                    {item}
                  </div>
                );
              })}
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
      <ModalLayout
        show={modalShow}
        onClose={() => setModalShow(false)}
        className="newUpdataModalRoot"
      >
        <img
          src={CloseIcon}
          className="closeIcon"
          alt="closeIcon"
          onClick={() => setModalShow(false)}
        />
        <div className="modalTitle">New update</div>
        <div className="modalInputContent">
          <div className="modalItem">
            <div className="title">Category</div>
            <div className="inputRoot">
              <input
                value={categoryValue}
                placeholder="Write update here"
                onChange={(e) => setCategoryValue(e.target.value)}
              />
              <div className="plus">+</div>
              <div
                className="roundBtn"
                onClick={() => setCategorySelectShow(!categorySelectShow)}
              >
                <i className="fas fa-chevron-down" />
                {categorySelectShow ? (
                  <div className="categorySelectRoot" ref={categorySelectRef}>
                    {categorySelect.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            query.get("newupdate_category") === item
                              ? "activeItem"
                              : "item"
                          }`}
                          onClick={() => handlCategory(item)}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="modalItem">
            <div className="title">Cases</div>
            <div className="inputRoot">
              <input
                value={caseValue}
                placeholder="Choose case"
                onChange={(e) => setCaseValue(e.target.value)}
              />
              <div className="plus">+</div>
              <div className="roundBtn">
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          <div className="modalItem">
            <div className="title">Update</div>
            <div className="inputRoot">
              <input
                value={updateValue}
                placeholder="Write update here"
                onChange={(e) => setUpdateValue(e.target.value)}
              />
            </div>
          </div>
          <div className="modalItem">
            <div className="title">Attach link</div>
            <div className="inputRoot">
              <input
                value={attachLinkValue}
                placeholder="Paste link here..."
                onChange={(e) => setAttachLinkValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="addLink">+ Add another link</div>
        <div className="updateBtn">Update</div>
      </ModalLayout>
    </div>
  );
}

export default Home;
