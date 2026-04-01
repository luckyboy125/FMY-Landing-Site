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
      className={`check-lists-long-item ${className ?? ''}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="check-lists-long-item__left">
        <div className="check-lists-long-item__circle-icon" onClick={handleCheck}>
          {checkStatus ? (
            <img src={checkIcon} className="check-lists-long-item__check-icon" alt="checkIcon" />
          ) : (
            <></>
          )}
        </div>
        <span
          className="check-lists-long-item__title"
          style={{ textDecoration: checkStatus ? 'line-through' : 'initial' }}
        >
          {title}
        </span>
      </div>
      <div className="check-lists-long-item__right">
        <div className="check-lists-long-item__right-inner">
          <div className="check-lists-long-item__avatar-root">
            <img src={avatar} className="check-lists-long-item__avatar" alt="avatar" />
            <span className="check-lists-long-item__user-name">{user}</span>
          </div>
          <ColorBtn label="10 Mar" width={128} color={colorTypeMap[type]} />
        </div>
        <ThreeDotBtn action={() => {}} />
      </div>
    </div>
  );
}

export default CheckListsLongItem;
