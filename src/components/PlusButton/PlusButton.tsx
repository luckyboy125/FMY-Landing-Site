import { useCallback, memo } from 'react';
import './PlusButton.css';

export interface PlusButtonProps {
  className?: string;
  action: () => void;
  content?: React.ReactNode;
}

function PlusButton({
  className = '',
  action,
  content
}: PlusButtonProps): JSX.Element {
  const handleClick = useCallback(() => {
    action();
  }, [action]);

  return (
    <div
      className={`plusBtnRoot ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && action()}
    >
      {content}
    </div>
  );
}

export default memo(PlusButton);
