import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import './DropdownLayout.css';

export interface DropdownLayoutProps {
  className?: string;
  children?: React.ReactNode;
  dropRoot?: React.ReactNode;
  dropRootStyle?: string;
}

function DropdownLayout({
  className = '',
  children,
  dropRoot,
  dropRootStyle = ''
}: DropdownLayoutProps): JSX.Element {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRef = useOutsideClick<HTMLDivElement>(() => setDropShow(false));

  const handleToggle = useCallback(() => {
    setDropShow((prev) => !prev);
  }, []);

  return (
    <div
      className={`dropdownLayoutRoot ${className}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
      {children}
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRef}>
          {dropRoot}
        </div>
      ) : null}
    </div>
  );
}

export default DropdownLayout;
