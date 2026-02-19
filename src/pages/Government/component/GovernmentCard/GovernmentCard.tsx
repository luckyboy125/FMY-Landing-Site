import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import person4 from "../../../../asset/person4.svg";
import copyIcon from "../../../../asset/government/copy.svg";
import twitterIcon from "../../../../asset/government/twitter.svg";
import "./GovernmentCard.css";

export interface GovernmentCardProps {
  className?: string;
  imgRoot: React.ReactNode;
}

function GovernmentCard({ className, imgRoot }: GovernmentCardProps): JSX.Element {
  return (
    <div className={`governmentCardRoot ${className ?? ""}`}>
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
        <ThreeDotBtn action={() => {}} />
      </div>
    </div>
  );
}

export default GovernmentCard;
