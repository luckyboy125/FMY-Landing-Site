import chevronIcon from "../../asset/images/chevron_icon.svg";
import "./ActionDropdown.css";

export interface ActionDropdownProps {
  className?: string;
  type?: string;
}

function ActionDropdown({ className = "" }: ActionDropdownProps): JSX.Element {
  return (
    <div className={`actionDropdownRoot ${className}`}>
      Related cases
      <img src={chevronIcon} alt="chevron" />
    </div>
  );
}

export default ActionDropdown;
