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
}: NewCheckListsModalProps): JSX.Element {
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
      className={`${className ?? ''} newCheckListsModalRoot`}
      show={show}
      onClose={handleModalClose}
    >
      <img
        src={CloseIcon}
        className="modalCloseIcon"
        alt="close icon"
        onClick={handleCloseModal}
      />
      <input
        placeholder="New Task"
        value={title}
        className="checkListsTitle"
        onChange={handleTitleChange}
      />
      <div className="newCheckListsToolRoot">
        Due date:
        <ColorBtn
          className="todayBtn"
          name="Today"
          width={86}
          color="#75B3FF"
        />
        <ColorBtn
          className="tomorrowBtn"
          name="Tomorrow"
          width={120}
          color="#75B3FF"
        />
        <ColorBtn
          className="otherBtn"
          icon={<img src={Calendar} className="calendarIcon" alt="calendar" />}
          arrowShow
          name="Other"
          width={139}
          color="#fff"
        />
      </div>
      <div className="newCheckListsToolRoot">
        Add participants:
        <ColorBtn
          className="participantsBtn"
          arrowShow
          name="None"
          width={97}
          color="#fff"
        />
      </div>
      <div className="additionDetail" onClick={handleAdditionDetail}>
        Additional details
        <i className="fas fa-angle-down"></i>
      </div>
      <div
        className="additionDetailContent"
        style={{ visibility: addContentShow ? 'visible' : 'hidden' }}
        onClick={() => {}}
      >
        <div className="additionDetailItem">
          Priority:
          <ColorBtn
            className="itemBtn"
            arrowShow
            name="None"
            width={97}
            color="#fff"
          />
        </div>
        <div className="additionDetailItem" style={{ marginLeft: '50px' }}>
          Repeat:
          <ColorBtn
            className="itemBtn"
            arrowShow
            name="None"
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
