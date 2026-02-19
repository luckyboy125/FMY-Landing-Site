import { useCallback, memo } from "react";
import "./ThreeDotBtn.css";

export interface ThreeDotBtnProps {
  className?: string;
  action: (e: React.MouseEvent) => void;
}

function ThreeDotBtn({
  className = "",
  action,
}: ThreeDotBtnProps): JSX.Element {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      action(e);
    },
    [action]
  );

  return (
    <div className={`${className} dotGroupRoot`} onClick={handleClick} role="button" tabIndex={0}>
      <div className="dot" aria-hidden />
      <div className="dot" aria-hidden />
      <div className="dot" aria-hidden />
    </div>
  );
}

export default memo(ThreeDotBtn);
