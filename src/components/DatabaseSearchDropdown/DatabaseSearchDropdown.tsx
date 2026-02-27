import { useState, useCallback } from 'react';
import keyword from '../../asset/images/nrds/keyword_icon.svg';
import calendar from '../../asset/images/nrds/calendar_icon.svg';
import './DatabaseSearchDropdown.css';

export interface DatabaseSearchDropdownProps {
  className?: string;
  label?: string;
  selectedValue?: React.ReactNode;
  type?: 'calendar' | 'keyword';
  children?: React.ReactNode;
  panelClassName?: string;
}

function DatabaseSearchDropdown({
  className = '',
  label,
  selectedValue,
  type,
  children,
  panelClassName = ''
}: DatabaseSearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`database-search-dropdown ${className}`.trim()}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      {type === 'calendar' ? (
        <img src={calendar} alt="" className="database-search-dropdown__icon" />
      ) : type === 'keyword' ? (
        <img src={keyword} alt="" className="database-search-dropdown__icon" />
      ) : null}
      <span className="database-search-dropdown__label">{label}:</span>
      <span className="database-search-dropdown__value">{selectedValue}</span>
      <i className="database-search-dropdown__caret fas fa-caret-down" aria-hidden />
      {isOpen ? (
        <div className={`database-search-dropdown__panel ${panelClassName}`.trim()}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

export default DatabaseSearchDropdown;
