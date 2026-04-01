import { useState, useCallback } from 'react';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import checkIcon from '../../../../asset/images/check_icon.svg';
import './TaskShortItem.css';

export interface TaskShortItemProps {
  className?: string;
  title: string;
  type: string;
  avatar: string;
  user: string;
  click?: () => void;
}

function TaskShortItem({
  className,
  title,
  type,
  avatar,
  user,
  click
}: TaskShortItemProps) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheck = useCallback(() => {
    setCheckStatus((prev) => !prev);
  }, []);

  return (
    <div
      className={`task-short-item ${className ?? ''}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="task-short-item__circle-icon" onClick={handleCheck}>
        {checkStatus ? <img src={checkIcon} alt="checkIcon" /> : <></>}
      </div>
      <div className="task-short-item__content">
        <div
          className="task-short-item__title"
          style={{ textDecoration: checkStatus ? 'line-through' : 'initial' }}
        >
          {title}
        </div>
        <div className="task-short-item__description">#{type}</div>
        <div className="task-short-item__items">
          <div className="task-short-item__items-left">
            <ColorBtn
              className="task-short-item__item-btn"
              label="10 Mar"
              color="#FF0000"
              width={128}
            />
            <div className="task-short-item__avatar-group">
              <img src={avatar} className="task-short-item__avatar" alt="avatar" />
              {user}
            </div>
          </div>
          <div className="task-short-item__delete-icon">
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <ThreeDotBtn className="task-short-item__dot-btn" action={() => click?.()} />
    </div>
  );
}

export default TaskShortItem;
