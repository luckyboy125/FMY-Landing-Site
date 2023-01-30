import { useState } from "react";
import { useOutsideClick } from "../../../../hook/DetectOutsideClick";
import { card_type } from "../../../../helpers/home.helper";
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
import spotify from "../../../../asset/images/social/spotify.svg";
import pinterest from "../../../../asset/images/social/pinterest.svg";
import ball from "../../../../asset/images/social/ball.svg";
import linkedin from "../../../../asset/images/social/linkedin.svg";
import behance from "../../../../asset/images/social/behance.svg";
import dribbble from "../../../../asset/images/social/dribbble.svg";
import whatsapp from "../../../../asset/images/social/whatsapp.svg";
import "./CommentModal.css";

function CommentModal({ className, show, onClose, type }) {
  const [commentArea, setCommentArea] = useState("");
  const modalRef = useOutsideClick(onClose);

  return (
    <>
      <div className={show ? "commentModalLoaderWrapper" : "displayNone"}>
        <div className={`commentModalRoot ${className}`} ref={modalRef}>
          <ThreeDotBtn className="setting" action={() => {}} />
          <img
            src={CloseIcon}
            className="closeIcon"
            alt="closeIcon"
            onClick={onClose}
          />

          {type === card_type.boycott.title ? (
            <>
              <div className="headerRoot">
                <div className="title">
                  Hezbollah called out for boycotting the <br /> elections in
                  Bahrain.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque cras felis interdum tempor,
                          lobortis egestas volutpat consectetur.....
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
            </>
          ) : type === card_type.newupdate.title ? (
            <div className="modalContainer">
              <div className="leftPart">
                <div className="titleBtn">New update</div>
                <div className="titleDes">
                  Hezbollah called out for boycotting the elections in Bahrain.
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="inputFileRoot">+</div>
              </div>
              <div className="divLine"></div>
              <div className="rightPart">
                <div className="title">General info:</div>
                <div className="rightPart1">
                  <div className="item1">
                    Upload date:
                    <div className="date">31 October 2022</div>
                  </div>
                  <div className="item2">
                    Username:
                    <img src={person3} alt="avatar" />
                    <div className="name">Nimrod Ben Efraim</div>
                  </div>
                </div>
                <div className="rightPart2">
                  <div className="title">Cases:</div>
                  <div className="btn">Lorem ipsum</div>
                  <div className="plus">+</div>
                </div>
                <div className="rightPart3">
                  <div className="title">Links:</div>
                  <div className="socialRoot">
                    <img src={instagram} alt="social_icon" />
                    <img src={facebook} alt="social_icon" />
                    <img src={twitter} alt="social_icon" />
                    <img src={tiktok} alt="social_icon" />
                    <img src={reddit} alt="social_icon" />
                    <img src={telegram} alt="social_icon" />
                    <img src={youtube} alt="social_icon" />
                    <img src={linkedin} alt="social_icon" />
                    <img src={dribbble} alt="social_icon" />
                    <img src={behance} alt="social_icon" />
                    <img src={pinterest} alt="social_icon" />
                    <img src={whatsapp} alt="social_icon" />
                    <img src={ball} alt="social_icon" />
                    <img src={spotify} alt="social_icon" />
                    <img src={w3} alt="social_icon" />
                  </div>
                </div>
                <div className="rightPart4">
                  <div className="title">Comments</div>
                  <div className="commentsRoot">
                    <img src={person3} alt="avatar" />
                    <div>
                      <div className="commentDes">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque cras felis interdum tempor, lobortis
                        egestas volutpat consectetur.....
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
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default CommentModal;
