import { useState } from "react";
import Person3 from "../../../asset/person3.svg";
import facebook from "../../../asset/images/social/facebook.svg";
import instagram from "../../../asset/images/social/instagram.svg";
import youtube from "../../../asset/images/social/youtube.svg";
import reddit from "../../../asset/images/social/reddit.svg";
import w3 from "../../../asset/images/social/w3.svg";
import music from "../../../asset/images/social/music.svg";
import telegram from "../../../asset/images/social/telegram.svg";
import twitter from "../../../asset/images/social/twitter.svg";
import "./HomeCard.css";

function HomeCard({ className }) {
  return (
    <>
      <div className={`homeCardRoot ${className}`}>
        <div className="dotGroup">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="cardTitle">Boycott elections</div>
        <div className="cardName">
          Hezbollah called out for boycotting the elections in Bahrain
        </div>
        <div className="cardAuthor">
          <img src={Person3} alt="avatar" />
          Nimrod Ben Efraim
        </div>
        <div className="cardDate">31 October 2022</div>
        <div className="cardIconSocial">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={music} alt="music" />
          <img src={reddit} alt="reddit" />
          <img src={telegram} alt="telegram" />
          <img src={youtube} alt="youtube" />
          <img src={w3} alt="w3" />
        </div>

        <div className="cardComments">2 Comments</div>
      </div>
    </>
  );
}

export default HomeCard;
