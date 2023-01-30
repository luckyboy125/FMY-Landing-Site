import { useOutsideClick } from "../../hook/DetectOutsideClick";
import "./ModalLayout.css";

function ModalLayout({ className, show, onClose, children }) {
  const modalRef = useOutsideClick(onClose);
  return (
    <div className={show ? "modalLayoutRootWrapper" : "displayNone"}>
      <div className={`modalLayoutRoot ${className}`} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
