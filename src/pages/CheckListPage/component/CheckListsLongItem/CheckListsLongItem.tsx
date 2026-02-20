import { useState, useCallback } from 'react';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import checkIcon from '../../../../asset/images/check_icon.svg';
import './CheckListsLongItem.css';

type ColorType = 'blue' | 'green' | 'orange';

export interface CheckListsLongItemProps {
  className?: string;
  title: string;
  avatar: string;
  user: string;
  click?: () => void;
  type: ColorType;
}

const colorTypeMap: Record<ColorType, string> = {
  blue: '#75B3FF',
  green: '#37CE4A',
  orange: '#FF7A00'
};

function CheckListsLongItem({
  className,
  title,
  avatar,
  user,
  type
}: CheckListsLongItemProps) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = useCallback(() => {
    setCheckStatus((prev) => !prev);
  }, []);

  return (
    <div
      className={`checkListsLongItem ${className ?? ''}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="firstPart">
        <div className="circleIcon" onClick={handleCheck}>
          {checkStatus ? (
            <img src={checkIcon} className="checkIcon" alt="checkIcon" />
          ) : (
            <></>
          )}
        </div>
        <span
          className="checkListsTitle"
          style={{ textDecoration: checkStatus ? 'line-through' : 'initial' }}
        >
          {title}
        </span>
      </div>
      <div className="secondPart">
        <div className="secondFirstPart">
          <div className="avatarRoot">
            <img src={avatar} className="avatar" alt="avatar" />
            <span className="userName">{user}</span>
          </div>
          <ColorBtn name="10 Mar" width={128} color={colorTypeMap[type]} />
        </div>
        <ThreeDotBtn action={() => {}} />
      </div>
    </div>
  );
}

export default CheckListsLongItem;
