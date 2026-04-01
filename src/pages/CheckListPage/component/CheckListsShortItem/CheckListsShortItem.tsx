import { useState, useCallback } from 'react';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import checkIcon from '../../../../asset/images/check_icon.svg';
import './CheckListsShortItem.css';

export interface CheckListsShortItemProps {
  className?: string;
  title: string;
  avatar: string;
  user: string;
  type?: string;
  click?: () => void;
}

function CheckListsShortItem({
  className,
  title,
  avatar,
  user,
  type,
  click
}: CheckListsShortItemProps) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = useCallback(() => {
    setCheckStatus((prev) => !prev);
  }, []);

  return (
    <div
      className={`check-lists-short-item ${className ?? ''}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="check-lists-short-item__circle-icon" onClick={handleCheck}>
        {checkStatus ? (
          <img src={checkIcon} className="check-lists-short-item__check-icon" alt="checkIcon" />
        ) : (
          <></>
        )}
      </div>
      <div className="check-lists-short-item__content">
        <div
          className="check-lists-short-item__title"
          style={{ textDecoration: checkStatus ? 'line-through' : 'initial' }}
        >
          {title}
        </div>
        <div className="check-lists-short-item__description"></div>
        <div className="check-lists-short-item__items">
          <div className="check-lists-short-item__items-first">
            <ColorBtn
              className="check-lists-short-item__item-button"
              label="10 Mar"
              color="#FF0000"
              width={128}
            />
            <div className="check-lists-short-item__avatar-root">
              <img src={avatar} className="check-lists-short-item__avatar" alt="avatar" />
              {user}
            </div>
          </div>
          <div className="check-lists-short-item__delete-icon">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <ThreeDotBtn className="check-lists-short-item__dot-button" action={() => click?.()} />
    </div>
  );
}

export default CheckListsShortItem;
