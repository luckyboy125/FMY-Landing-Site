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
    <div
      className={`back-btn ${className}`.trim()}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && action()}
    >
      <i className="back-btn__icon fas fa-chevron-left" aria-hidden />
      <span className="back-btn__label">Back</span>
    </div>
  );
}

export default memo(BackBtn);
