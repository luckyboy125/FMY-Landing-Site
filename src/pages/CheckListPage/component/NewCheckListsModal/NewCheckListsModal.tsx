import { useState, useCallback } from 'react';
import ColorBtn from '../../../../components/ColorBtn/ColorBtn';
import PlusButton from '../../../../components/PlusButton/PlusButton';
import ModalLayout from '../../../../components/ModalLayout/ModalLayout';
import Calendar from '../../../../asset/images/calendar.svg';
import CloseIcon from '../../../../asset/images/close_icon.svg';
import './NewCheckListsModal.css';

export interface NewCheckListsModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
}

function NewCheckListsModal({
  className,
  show,
  onClose
}: NewCheckListsModalProps) {
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
      className={`${className ?? ''} new-check-lists-modal`}
      show={show}
      onClose={handleModalClose}
    >
      <img
        src={CloseIcon}
        className="new-check-lists-modal__close-icon"
        alt="close icon"
        onClick={handleCloseModal}
      />
      <input
        placeholder="New Task"
        value={title}
        className="new-check-lists-modal__title-input"
        onChange={handleTitleChange}
      />
      <div className="new-check-lists-modal__tool-row">
        Due date:
        <ColorBtn
          className="new-check-lists-modal__today-button"
          label="Today"
          width={86}
          color="#75B3FF"
        />
        <ColorBtn
          className="new-check-lists-modal__tomorrow-button"
          label="Tomorrow"
          width={120}
          color="#75B3FF"
        />
        <ColorBtn
          className="new-check-lists-modal__other-button"
          icon={<img src={Calendar} className="new-check-lists-modal__calendar-icon" alt="calendar" />}
          showArrow
          label="Other"
          width={139}
          color="#fff"
        />
      </div>
      <div className="new-check-lists-modal__tool-row">
        Add participants:
        <ColorBtn
          className="new-check-lists-modal__participants-button"
          showArrow
          label="None"
          width={97}
          color="#fff"
        />
      </div>
      <div className="new-check-lists-modal__addition-detail" onClick={handleAdditionDetail}>
        Additional details
        <i className="fas fa-angle-down"></i>
      </div>
      <div
        className="new-check-lists-modal__addition-detail-content"
        style={{ visibility: addContentShow ? 'visible' : 'hidden' }}
        onClick={() => {}}
      >
        <div className="new-check-lists-modal__addition-detail-item">
          Priority:
          <ColorBtn
            className="new-check-lists-modal__item-button"
            showArrow
            label="None"
            width={97}
            color="#fff"
          />
        </div>
        <div className="new-check-lists-modal__addition-detail-item" style={{ marginLeft: '50px' }}>
          Repeat:
          <ColorBtn
            className="new-check-lists-modal__item-button"
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

export default NewCheckListsModal;
