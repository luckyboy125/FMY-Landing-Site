import ActionTab from "../../components/ActionTab/ActionTab";
import PlusButton from "../../components/PlusButton/PlusButton";
import Person1 from "../../asset/person1.svg";
import Person2 from "../../asset/person2.svg";
import Person3 from "../../asset/person3.svg";
import "./CheckLists.css";
import { useState } from "react";
import CheckListsLongItem from "./component/CheckListsLongItem/CheckListsLongItem";
import NewCheckListsModal from "./component/NewCheckListsModal/NewCheckListsModal";
import CheckListsShortItem from "./component/CheckListsShortItem/CheckListsShortItem";

function CheckLists() {
  const [newCheckListModalShow, setNewCheckListModalShow] = useState(false);

  const handleNewCheckListsModal = () => {
    setNewCheckListModalShow(true);
  };
  return (
    <>
      <div className="checkListsRoot">
        <div className="checkListsTitle">CheckLists</div>
        <div className="checkListsHeaderRoot">
          <ActionTab />
          <PlusButton content="+ New task" action={handleNewCheckListsModal} />
        </div>
        <div className="checkListsContainer">
          <div className="checkListsContainerHeader">
            <div className="firstItem">
              <div className="titleRoot">
                <div className="headerTitle">Review all platforms</div>
                <div className="headerDesRoot">
                  <i className="far fa-angle-right"></i>
                  <span>17 Tasks</span>
                </div>
              </div>
              <div className="completeCount">5/17 completed</div>
            </div>
            <div className="secondItem">
              <div className="headerTitle">Overdue</div>
              <div className="headerDesRoot">
                <i className="fas fa-angle-down"></i>
                <span>3 Tasks</span>
              </div>
            </div>
          </div>
          <div className="checkListsContent">
            <div className="firstContent">
              <div className="checkListsContentItem">
                <CheckListsLongItem
                  user="Noy"
                  title="Facebook"
                  className="checkListsItem"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Twitter"
                  className="checkListsItem"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Reddit"
                  className="lastCheckListsItem"
                  avatar={Person3}
                  type="orange"
                />
                <div
                  className="addCheckListsBtn"
                  onClick={handleNewCheckListsModal}
                >
                  + New Task
                </div>
              </div>
              <div className="checkListsContentItem">
                <div className="headerRoot">
                  <div className="titleRoot">
                    <div className="headerTitle">Review all languages</div>
                    <div className="headerDesRoot">
                      <i className="far fa-angle-right"></i>
                      <span>17 Tasks</span>
                    </div>
                  </div>
                  <div className="completeCount">5/17 completed</div>
                </div>
                <CheckListsLongItem
                  user="Noy"
                  title="English"
                  className="checkListsItem"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Arabic"
                  className="checkListsItem"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Pharsi"
                  className="lastCheckListsItem"
                  avatar={Person3}
                  type="orange"
                />
                <div
                  className="addCheckListsBtn"
                  onClick={handleNewCheckListsModal}
                >
                  + New Task
                </div>
              </div>
              <div className="checkListsContentItem">
                <div className="headerRoot">
                  <div className="titleRoot">
                    <div className="headerTitle">Review open cases</div>
                    <div className="headerDesRoot">
                      <i className="far fa-angle-right"></i>
                      <span>17 Tasks</span>
                    </div>
                  </div>
                  <div className="completeCount">5/17 completed</div>
                </div>
                <CheckListsLongItem
                  user="Noy"
                  title="Germany-France relations"
                  className="checkListsItem"
                  avatar={Person1}
                  type="blue"
                />
                <CheckListsLongItem
                  user="Yaniv"
                  title="Anti COVID operation"
                  className="checkListsItem"
                  avatar={Person2}
                  type="green"
                />
                <CheckListsLongItem
                  user="Nimrod"
                  title="Pro Putin operation"
                  className="lastCheckListsItem"
                  avatar={Person3}
                  type="orange"
                />
              </div>
            </div>
            <div className="overdueContent">
              <CheckListsShortItem
                className="checkListShortItem"
                avatar={Person1}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Noy"
              />
              <CheckListsShortItem
                className="checkListShortItem"
                avatar={Person3}
                title="Lorem ipsum dolor sit"
                type="work"
                user="Nimrod"
              />
              <CheckListsShortItem
                className="checkListShortItem"
                avatar={Person2}
                title="Lorem ipsum dolor sit"
                type="personal"
                user="Yaniv"
              />
            </div>
          </div>
          <div
            className="addCheckListsBtn"
            style={{ marginTop: "18px" }}
            onClick={handleNewCheckListsModal}
          >
            + New Task
          </div>
        </div>
      </div>
      <NewCheckListsModal
        show={newCheckListModalShow}
        onClose={() => setNewCheckListModalShow(false)}
      />
    </>
  );
}

export default CheckLists;
