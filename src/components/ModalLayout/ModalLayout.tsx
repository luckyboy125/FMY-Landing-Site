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
}: ModalLayoutProps): JSX.Element {
  const modalRef = useOutsideClick<HTMLDivElement>(onClose);

  if (!show) return <></>;

  return (
    <div className="modalLayoutRootWrapper">
      <div className={`modalLayoutRoot ${className}`} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
