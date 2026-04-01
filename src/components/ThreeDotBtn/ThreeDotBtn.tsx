import { useCallback, memo } from 'react';
import './ThreeDotBtn.css';

export interface ThreeDotBtnProps {
  className?: string;
  action: (e: React.MouseEvent) => void;
}

function ThreeDotBtn({
  className = '',
  action
}: ThreeDotBtnProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      action(e);
    },
    [action]
  );

  return (
    <div
      className={`${className} three-dot-btn`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="three-dot-btn__dot" aria-hidden />
      <div className="three-dot-btn__dot" aria-hidden />
      <div className="three-dot-btn__dot" aria-hidden />
    </div>
  );
}

export default memo(ThreeDotBtn);
