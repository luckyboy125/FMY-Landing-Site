import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./ActionDropdown.css";

export interface ActionDropdownProps {
  className?: string;
}

function ActionDropdown({ className = "" }: ActionDropdownProps) {
  return (
    <div className={`actionDropdownRoot ${className}`}>
      Related cases
      <img src={chevronIcon} alt="chevron" />
    </div>
  );
}

export default ActionDropdown;
