import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import './DropdownLayout.css';

export interface DropdownLayoutProps {
  className?: string;
  children?: React.ReactNode;
  panelContent?: React.ReactNode;
  panelClassName?: string;
}

function DropdownLayout({
  className = '',
  children,
  panelContent,
  panelClassName = '',
}: DropdownLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`dropdown-layout ${className}`.trim()}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      {children}
      {isOpen ? (
        <div
          className={`dropdown-layout__panel ${panelClassName}`.trim()}
          ref={panelRef}
        >
          {panelContent}
        </div>
      ) : null}
    </div>
  );
}

export default DropdownLayout;
