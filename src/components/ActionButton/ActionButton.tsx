import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import './ActionButton.css';

export interface ActionButtonProps {
  name?: string;
  content?: React.ReactNode;
  className?: string;
  type?: string;
  children?: React.ReactNode;
  panelContent?: React.ReactNode;
  panelClassName?: string;
}

function ActionButton({
  name,
  content,
  className = '',
  type,
  children,
  panelContent,
  panelClassName = ''
}: ActionButtonProps) {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRootRef = useOutsideClick<HTMLDivElement>(() =>
    setDropShow(false)
  );

  const handleClick = useCallback((event: React.MouseEvent) => {
    setDropShow((prev) => !prev);
    event.stopPropagation();
  }, []);

  return (
    <div
      className={`action-button ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      {type !== 'common' ? (
        <div className="action-button__label">{name}:</div>
      ) : null}
      <div className="action-button__content">
        {content}
        <i className="fas fa-caret-down" aria-hidden />
      </div>
      {children}
      {dropShow ? (
        <div
          className={`action-button__dropdown ${panelClassName}`}
          ref={dropDownRootRef}
        >
          {panelContent}
        </div>
      ) : null}
    </div>
  );
}

export default ActionButton;
