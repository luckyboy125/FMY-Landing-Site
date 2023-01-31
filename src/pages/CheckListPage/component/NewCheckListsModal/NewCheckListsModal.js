import { useState } from "react";
import { useOutsideClick } from "../../../../hook/DetectOutsideClick";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import PlusButton from "../../../../components/PlusButton/PlusButton";
import Calendar from "../../../../asset/images/calendar.svg";
import CloseIcon from "../../../../asset/images/close_icon.svg";
import "./NewCheckListsModal.css";

function NewCheckListsModal({ className, show, onClose }) {
  const [title, setTitle] = useState("");
  const [addContentShow, setAddContentShow] = useState(false);
  const modalRef = useOutsideClick(() => {
    setAddContentShow(false);
    onClose();
  });

  const handleCloseModal = () => {
    addContentShow ? setAddContentShow(false) : onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdditionDetail = () => {
    setAddContentShow(!addContentShow);
  };

  return (
    <>
      <div className={show ? "newCheckListsModalLoaderWrapper" : "displayNone"}>
        <div className={`newCheckListsModalRoot ${className}`} ref={modalRef}>
          <img
            src={CloseIcon}
            className="modalCloseIcon"
            alt="close icon"
            onClick={handleCloseModal}
          />
          <input
            placeholder="New Task"
            value={title}
            className="checkListsTitle"
            onChange={(e) => handleTitleChange(e)}
          />
          <div className="newCheckListsToolRoot">
            Due date:
            <ColorBtn
              className="todayBtn"
              name="Today"
              width={86}
              color="#75B3FF"
            />
            <ColorBtn
              className="tomorrowBtn"
              name="Tomorrow"
              width={120}
              color="#75B3FF"
            />
            <ColorBtn
              className="otherBtn"
              icon={
                <img src={Calendar} className="calendarIcon" alt="calendar" />
              }
              arrowShow
              name="Other"
              width={139}
              color="#fff"
            />
          </div>
          <div className="newCheckListsToolRoot">
            Add participants:
            <ColorBtn
              className="participantsBtn"
              arrowShow
              name="None"
              width={97}
              color="#fff"
            />
          </div>
          <div className="additionDetail" onClick={handleAdditionDetail}>
            Additional details
            <i className="fas fa-angle-down"></i>
          </div>
          <div
            className="additionDetailContent"
            style={{ visibility: addContentShow ? "visible" : "hidden" }}
            onClick={() => {}}
          >
            <div className="additionDetailItem">
              Priority:
              <ColorBtn
                className="itemBtn"
                arrowShow
                name="None"
                width={97}
                color="#fff"
              />
            </div>
            <div className="additionDetailItem" style={{ marginLeft: "50px" }}>
              Repeat:
              <ColorBtn
                className="itemBtn"
                arrowShow
                name="None"
                width={97}
                color="#fff"
              />
            </div>
          </div>
          <PlusButton content="Add Task" action={() => {}} />
        </div>
      </div>
    </>
  );
}

export default NewCheckListsModal;
