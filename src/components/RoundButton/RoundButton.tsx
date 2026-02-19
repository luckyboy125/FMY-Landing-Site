import { useCallback, memo } from "react";
import "./RoundButton.css";

export interface RoundButtonProps {
  className?: string;
  action: () => void;
}

function RoundButton({
  className = "",
  action,
}: RoundButtonProps): JSX.Element {
  const handleClick = useCallback(() => {
    action();
  }, [action]);

  return (
    <div className={`roundButtonRoot ${className}`} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && action()}>
      <i className="fas fa-chevron-down" aria-hidden />
    </div>
  );
}

export default memo(RoundButton);
