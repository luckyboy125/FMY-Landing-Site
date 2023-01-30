import { useState } from "react";
import { card_type } from "../../../helpers/home.helper";
import CommentModal from "./CommentModal/CommentModal";
import ThreeDotBtn from "../../../components/ThreeDotBtn/ThreeDotBtn";
import Person3 from "../../../asset/person3.svg";
import facebook from "../../../asset/images/social/facebook.svg";
import instagram from "../../../asset/images/social/instagram.svg";
import youtube from "../../../asset/images/social/youtube.svg";
import reddit from "../../../asset/images/social/reddit.svg";
import w3 from "../../../asset/images/social/w3.svg";
import tiktok from "../../../asset/images/social/tiktok.svg";
import telegram from "../../../asset/images/social/telegram.svg";
import twitter from "../../../asset/images/social/twitter.svg";
import "./HomeCard.css";

function HomeCard({
  className,
  cardType,
  cardContent,
  author,
  cardDate,
  commentType,
}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`homeCardRoot ${className}`}>
        <ThreeDotBtn className="dotBtn" />
        <div
          className="cardTitle"
          style={{ backgroundColor: card_type[cardType].color }}
        >
          {card_type[cardType].title}
        </div>
        <div className="cardName">{cardContent}</div>
        <div className="cardAuthor">
          <img src={Person3} className="authorAvatar" alt="avatar" />
          {author}
        </div>
        <div className="cardDate">{cardDate}</div>
        <div className="cardIconSocial">
          <div className="front">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={tiktok} alt="tiktok" />
            <img src={reddit} alt="reddit" />
            <img src={telegram} alt="telegram" />
            <img src={youtube} alt="youtube" />
            <img src={w3} alt="w3" />
          </div>
          {commentType ? (
            <div className="commentBtn" onClick={() => setModalShow(true)}>
              Comment
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <CommentModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        type={card_type[cardType].title}
      />
    </>
  );
}

export default HomeCard;
