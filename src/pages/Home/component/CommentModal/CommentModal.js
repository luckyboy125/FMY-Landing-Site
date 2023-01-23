import { useEffect, useRef, useState } from "react";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import CloseIcon from "../../../../asset/images/close_icon.svg";
import person3 from "../../../../asset/person3.svg";
import facebook from "../../../../asset/images/social/facebook.svg";
import instagram from "../../../../asset/images/social/instagram.svg";
import youtube from "../../../../asset/images/social/youtube.svg";
import reddit from "../../../../asset/images/social/reddit.svg";
import w3 from "../../../../asset/images/social/w3.svg";
import tiktok from "../../../../asset/images/social/tiktok.svg";
import telegram from "../../../../asset/images/social/telegram.svg";
import twitter from "../../../../asset/images/social/twitter.svg";
import "./CommentModal.css";

function CommentModal({ className, show, onClose }) {
  const [addContentShow, setAddContentShow] = useState(false);
  const [commentArea, setCommentArea] = useState("");
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
                  <img src={person3} alt="avatar" />
                  Nimrod Ben Efraim
                </div>
              </div>
              <div className="leftPart2">
                <div className="title">Cases:</div>
                <div className="btn">Lorem ipsum</div>
                <div className="plus">+</div>
              </div>
              <div className="leftPart3">
                <div className="title">Links:</div>
                <div className="socialRoot">
                  <img src={instagram} alt="social_icon" />
                  <img src={facebook} alt="social_icon" />
                  <img src={twitter} alt="social_icon" />
                  <img src={tiktok} alt="social_icon" />
                  <img src={reddit} alt="social_icon" />
                  <img src={telegram} alt="social_icon" />
                  <img src={youtube} alt="social_icon" />
                  <img src={w3} alt="social_icon" />
                </div>
              </div>
              <div className="leftPart4">
                <div className="title">Comments</div>
                <div className="commentsRoot">
                  <img src={person3} alt="avatar" />
                  <div>
                    <div className="commentDes">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque cras felis interdum tempor, lobortis egestas
                      volutpat consectetur.....
                    </div>
                    <div className="commentDate">Feb 6, 11:49 AM</div>
                  </div>
                  <ThreeDotBtn action={() => {}} />
                </div>
                <div className="commentsInputRoot">
                  <textarea
                    placeholder="Comment here"
                    value={commentArea}
                    onChange={(e) => setCommentArea(e.target.value)}
                  />
                  <div className="postBtn">Post</div>
                  <ThreeDotBtn className="moreSetting" action={() => {}} />
                </div>
              </div>
            </div>
            <div className="rightPart">
              <div className="inputFileRoot">+</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentModal;
