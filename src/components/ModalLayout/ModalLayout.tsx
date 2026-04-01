import { useOutsideClick } from '../../hook/DetectOutsideClick';
import './ModalLayout.css';

export interface ModalLayoutProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function ModalLayout({
  className = '',
  show,
  onClose,
  children
}: ModalLayoutProps) {
  const modalRef = useOutsideClick<HTMLDivElement>(onClose);

  if (!show) return <></>;

  return (
    <div className="modal-layout">
      <div className={`modal-layout__inner ${className}`} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
