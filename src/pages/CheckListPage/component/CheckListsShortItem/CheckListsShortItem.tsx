import { useState, useCallback } from "react";
import ColorBtn from "../../../../components/ColorBtn/ColorBtn";
import ThreeDotBtn from "../../../../components/ThreeDotBtn/ThreeDotBtn";
import checkIcon from "../../../../asset/images/check_icon.svg";
import "./CheckListsShortItem.css";

export interface CheckListsShortItemProps {
  className?: string;
  title: string;
  type: string;
  avatar: string;
  user: string;
  click?: () => void;
}

function CheckListsShortItem({
  className,
  title,
  type,
  avatar,
  user,
  click,
}: CheckListsShortItemProps): JSX.Element {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = useCallback(() => {
    setCheckStatus((prev) => !prev);
  }, []);

  return (
    <div
      className={`checkListsShortItem ${className ?? ""}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="circleIcon" onClick={handleCheck}>
        {checkStatus ? (
          <img src={checkIcon} className="checkIcon" alt="checkIcon" />
        ) : (
          <></>
        )}
      </div>
      <div className="checkListsShortItemContent">
        <div
          className="title"
          style={{ textDecoration: checkStatus ? "line-through" : "initial" }}
        >
          {title}
        </div>
        <div className="des"></div>
        <div className="items">
          <div className="itemsFirst">
            <ColorBtn className="itemBtn" name="10 Mar" color="#FF0000" width={128} />
            <div className="avatarRoot">
              <img src={avatar} className="avatar" alt="avatar" />
              {user}
            </div>
          </div>
          <div className="deleteIcon">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <ThreeDotBtn className="dotBtn" action={() => click?.()} />
    </div>
  );
}

export default CheckListsShortItem;
