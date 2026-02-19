import ModalLayout from "../ModalLayout/ModalLayout";
import closeIcon from "../../asset/images/close_icon.svg";
import "./DeleteModal.css";

export interface DeleteModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  description?: string;
}

function DeleteModal({
  className = "",
  show,
  onClose,
  description,
}: DeleteModalProps): JSX.Element {
  return (
    <ModalLayout
      show={show}
      onClose={onClose}
      className={`deleteModalRoot ${className}`}
    >
      <img
        src={closeIcon}
        className="closeIcon"
        alt="close"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="des">{description}</div>
      <div className="btnRoot">
        <div className="modalBtn">Yes</div>
        <div className="modalBtn">No</div>
      </div>
    </ModalLayout>
  );
}

export default DeleteModal;
