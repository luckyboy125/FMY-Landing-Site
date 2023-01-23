import { useEffect, useRef, useState } from "react";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import CloseIcon from "../../../../asset/images/close_icon.svg";
import person1 from "../../../../asset/person1.svg";
import "./CommentModal.css";

function CommentModal({ className, show, onClose }) {
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
  return (
    <>
      <div
        className={show ? "commentModalLoaderWrapper" : "displayNone"}
        ref={rootRef}
      >
        <div className={`commentModalRoot ${className}`} ref={contentRef}>
          <div className="headerRoot">
            <div className="title">
              Hezbollah called out for boycotting the <br /> elections in
              Bahrain.
            </div>
            <div className="toolRoot">
              <ThreeDotBtn action={() => {}} />
              <img src={CloseIcon} alt="closeIcon" />
            </div>
          </div>
          <div className="contentRoot">
            <div className="leftPart">
              <div className="leftPart1">
                <div className="item1">
                  <div className="title">Update date:</div>
                  31 October 2022
                </div>
                <div className="item2">
                  <div className="title">Username:</div>
                  <img src={person1} alt="avatar" />
                  Nimrod Ben Efraim
                </div>
              </div>
            </div>
            <div className="rightPart"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
