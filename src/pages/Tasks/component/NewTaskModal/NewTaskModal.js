import { useEffect, useRef, useState } from "react";
import "./NewTaskModal.css";
import CloseIcon from "../../../../asset/images/close_icon.svg";
import Calendar from "../../../../asset/images/calendar.svg";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import PlusButton from "../../../../components/PlusButton/PlusButton";

function NewTaskModal({ className, show, onClose }) {
  const [title, setTitle] = useState("");
  const [addContentShow, setAddContentShow] = useState(false);
  const rootRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root = rootRef.current;
        const content = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          setAddContentShow(false);
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

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
      <div
        className={show ? "newTaskModalLoaderWrapper" : "displayNone"}
        ref={rootRef}
      >
        <div className={`newTaskModalRoot ${className}`} ref={contentRef}>
          <img
            src={CloseIcon}
            className="modalCloseIcon"
            alt="close icon"
            onClick={handleCloseModal}
          />
          <input
            placeholder="New Task"
            value={title}
            className="taskTitle"
            onChange={(e) => handleTitleChange(e)}
          />
          <div className="newTaskToolRoot">
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
          <div className="newTaskToolRoot">
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
            onClick={() => console.log("it is working")}
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

export default NewTaskModal;
