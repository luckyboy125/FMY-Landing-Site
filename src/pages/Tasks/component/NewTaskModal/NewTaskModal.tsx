import { useState, useCallback } from 'react';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import PlusButton from '../../../../components/PlusButton/PlusButton';
import ModalLayout from '../../../../components/ModalLayout/ModalLayout';
import Calendar from '../../../../asset/images/calendar.svg';
import CloseIcon from '../../../../asset/images/close_icon.svg';
import './NewTaskModal.css';

export interface NewTaskModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
}

function NewTaskModal({
  className,
  show,
  onClose
}: NewTaskModalProps) {
  const [title, setTitle] = useState('');
  const [addContentShow, setAddContentShow] = useState(false);

  const handleModalClose = useCallback(() => {
    setAddContentShow(false);
    onClose();
  }, [onClose]);

  const handleCloseModal = useCallback(() => {
    if (addContentShow) {
      setAddContentShow(false);
    } else {
      onClose();
    }
  }, [addContentShow, onClose]);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleAdditionDetail = useCallback(() => {
    setAddContentShow((prev) => !prev);
  }, []);

  return (
    <ModalLayout
      show={show}
      className={`new-task-modal ${className ?? ''}`}
      onClose={handleModalClose}
    >
      <img
        src={CloseIcon}
        className="new-task-modal__close-icon"
        alt="close icon"
        onClick={handleCloseModal}
      />
      <input
        placeholder="New Task"
        value={title}
        className="new-task-modal__title-input"
        onChange={handleTitleChange}
      />
      <div className="new-task-modal__tool-row">
        Due date:
        <ColorBtn
          className="new-task-modal__today-btn"
          label="Today"
          width={86}
          color="#75B3FF"
        />
        <ColorBtn
          className="new-task-modal__tomorrow-btn"
          label="Tomorrow"
          width={120}
          color="#75B3FF"
        />
        <ColorBtn
          className="new-task-modal__other-btn"
          icon={<img src={Calendar} className="new-task-modal__calendar-icon" alt="calendar" />}
          showArrow
          label="Other"
          width={139}
          color="#fff"
        />
      </div>
      <div className="new-task-modal__tool-row">
        Add participants:
        <ColorBtn
          className="new-task-modal__participants-btn"
          showArrow
          label="None"
          width={97}
          color="#fff"
        />
      </div>
      <div className="new-task-modal__addition-detail" onClick={handleAdditionDetail}>
        Additional details
        <i className="fas fa-angle-down"></i>
      </div>
      <div
        className="new-task-modal__addition-content"
        style={{ visibility: addContentShow ? 'visible' : 'hidden' }}
        onClick={() => {}}
      >
        <div className="new-task-modal__addition-item">
          Priority:
          <ColorBtn
            className="new-task-modal__item-btn"
            showArrow
            label="None"
            width={97}
            color="#fff"
          />
        </div>
        <div className="new-task-modal__addition-item" style={{ marginLeft: '50px' }}>
          Repeat:
          <ColorBtn
            className="new-task-modal__item-btn"
            showArrow
            label="None"
            width={97}
            color="#fff"
          />
        </div>
      </div>
      <PlusButton content="Add Task" action={() => {}} />
    </ModalLayout>
  );
}

export default NewTaskModal;
