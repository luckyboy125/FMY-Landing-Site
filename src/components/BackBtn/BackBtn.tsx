import { useCallback, memo } from "react";
import "./BackBtn.css";

export interface BackBtnProps {
  className?: string;
  action: () => void;
}

function BackBtn({ className = "", action }: BackBtnProps) {
  const handleClick = useCallback(() => {
    action();
  }, [action]);

  return (
    <div className={`backBtnRoot ${className}`} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && action()}>
      <i className="fas fa-chevron-left" aria-hidden />
      <div className="backBtnContent">Back</div>
    </div>
  );
}

export default memo(BackBtn);
