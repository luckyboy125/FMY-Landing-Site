import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./ActionDropdown.css";

export interface ActionDropdownProps {
  className?: string;
}

function ActionDropdown({ className = "" }: ActionDropdownProps) {
  return (
    <div className={`action-dropdown ${className}`.trim()}>
      <span className="action-dropdown__label">Related cases</span>
      <img className="action-dropdown__icon" src={chevronIcon} alt="chevron" />
    </div>
  );
}

export default ActionDropdown;
