import "./GovernmentCard.css";
import copyIcon from "../../../../asset/government/copy.svg";
import twitterIcon from "../../../../asset/government/twitter.svg";
import person4 from "../../../../asset/person4.svg";

function GovernmentCard({ className, imgRoot }) {
  return (
    <div className={`governmentCardRoot ${className}`}>
      {imgRoot}
      <div className="governmentCardFooter">
        <img src={copyIcon} className="copy" alt="copy" />
        <div className="divline"></div>
        <img src={twitterIcon} className="twitter" alt="copy" />
        <div className="divline"></div>
        <div className="date">
          13 Dec, <span className="special">2022</span>
        </div>
        <div className="divline"></div>
        <div className="avatarRoot">
          <img src={person4} className="avatar" alt="avatar" />
          Daniel
        </div>
        <div className="divline"></div>
        <div className="view">View</div>
        <div className="dotGroup" onClick={() => {}}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default GovernmentCard;
