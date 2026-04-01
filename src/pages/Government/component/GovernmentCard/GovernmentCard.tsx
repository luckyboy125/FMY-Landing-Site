import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import person4 from "../../../../asset/person4.svg";
import copyIcon from "../../../../asset/government/copy.svg";
import twitterIcon from "../../../../asset/government/twitter.svg";
import "./GovernmentCard.css";

export interface GovernmentCardProps {
  className?: string;
  imgRoot: React.ReactNode;
}

function GovernmentCard({ className, imgRoot }: GovernmentCardProps) {
  return (
    <div className={`government-card ${className ?? ""}`}>
      {imgRoot}
      <div className="government-card__footer">
        <img src={copyIcon} className="government-card__copy" alt="copy" />
        <div className="government-card__divider"></div>
        <img src={twitterIcon} className="government-card__twitter" alt="copy" />
        <div className="government-card__divider"></div>
        <div className="government-card__date">
          13 Dec, <span className="special">2022</span>
        </div>
        <div className="government-card__divider"></div>
        <div className="government-card__avatar-root">
          <img src={person4} className="government-card__avatar" alt="avatar" />
          Daniel
        </div>
        <div className="government-card__divider"></div>
        <div className="government-card__view">View</div>
        <ThreeDotBtn action={() => {}} />
      </div>
    </div>
  );
}

export default GovernmentCard;
