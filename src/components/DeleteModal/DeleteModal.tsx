import ModalLayout from '../ModalLayout/ModalLayout';
import closeIcon from '../../asset/images/close_icon.svg';
import './DeleteModal.css';

export interface DeleteModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  message?: string;
}

function DeleteModal({
  className = '',
  show,
  onClose,
  message,
}: DeleteModalProps) {
  return (
    <ModalLayout
      show={show}
      onClose={onClose}
      className={`delete-modal ${className}`.trim()}
    >
      <button
        type="button"
        className="delete-modal__close"
        onClick={onClose}
        aria-label="Close"
      >
        <img src={closeIcon} alt="" aria-hidden />
      </button>
      <p className="delete-modal__message">{message}</p>
      <div className="delete-modal__actions">
        <button type="button" className="delete-modal__btn">
          Yes
        </button>
        <button type="button" className="delete-modal__btn" onClick={onClose}>
          No
        </button>
      </div>
    </ModalLayout>
  );
}

export default DeleteModal;
