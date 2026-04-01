import { useEffect, useState, useCallback } from 'react';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import checkIcon from '../../../../asset/images/check_icon.svg';
import './TaskLongItem.css';

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export interface TaskLongItemProps {
  className?: string;
  title: string;
  avatar: string;
  dropdown: React.ReactNode;
  click?: () => void;
  date: number;
}

function TaskLongItem({
  className,
  title,
  avatar,
  dropdown,
  click,
  date
}: TaskLongItemProps) {
  const [time, setTime] = useState('');
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    setTime(new Date(date * 1000).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS));
  }, [date]);

  const handleCheck = useCallback(() => {
    setCheckStatus((prev) => !prev);
  }, []);

  return (
    <div
      className={`task-long-item ${className ?? ''}`}
      style={{ opacity: checkStatus ? 0.4 : 1 }}
    >
      <div className="task-long-item__left">
        <div className="task-long-item__circle-icon" onClick={handleCheck}>
          {checkStatus ? <img src={checkIcon} alt="checkIcon" /> : <></>}
        </div>
        <div className="task-long-item__title-group">
          <div
            className="task-long-item__title"
            style={{ textDecoration: checkStatus ? 'line-through' : 'initial' }}
          >
            {title}
          </div>
        </div>
      </div>
      <div className="task-long-item__right">
        {dropdown}
        <div className="task-long-item__avatar-group">
          <img src={avatar} className="task-long-item__avatar" alt="avatar" />
          <span className="task-long-item__avatar-desc"></span>
        </div>
        <div className="task-long-item__date">
          <div className="task-long-item__date-day">{time.split(',')[0]}</div>
          <div className="task-long-item__date-time">
            {time.split(',')[1]}
            {time.split(',')[2]}
          </div>
        </div>
        <ThreeDotBtn action={() => click?.()} />
      </div>
    </div>
  );
}

export default TaskLongItem;
