import ModalLayout from "../ModalLayout/ModalLayout";
import closeIcon from "../../asset/images/close_icon.svg";
import "./DeleteModal.css";

function DeleteModal({ className, show, onClose, description }) {
  return (
    <ModalLayout
      show={show}
      onClose={onClose}
      className={`deleteModalRoot ${className}`}
    >
      <img
        src={closeIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={onClose}
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
