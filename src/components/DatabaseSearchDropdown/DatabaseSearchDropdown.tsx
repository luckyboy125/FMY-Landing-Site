import { useState, useCallback } from 'react';
import keyword from '../../asset/images/nrds/keyword_icon.svg';
import calendar from '../../asset/images/nrds/calendar_icon.svg';
import './DatabaseSearchDropdown.css';

export interface DatabaseSearchDropdownProps {
  className?: string;
  content?: string;
  select?: React.ReactNode;
  type?: 'calendar' | 'keyword';
  children?: React.ReactNode;
  childrenStyle?: string;
}

function DatabaseSearchDropdown({
  className = '',
  content,
  select,
  type,
  children,
  childrenStyle = ''
}: DatabaseSearchDropdownProps): JSX.Element {
  const [dropwDownShow, setDropdownShow] = useState(false);

  const handleToggle = useCallback(() => {
    setDropdownShow((prev) => !prev);
  }, []);

  return (
    <div
      className={`databaseSearchDropdownRoot ${className}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
      {type === 'calendar' ? (
        <img src={calendar} alt="calendar" />
      ) : type === 'keyword' ? (
        <img src={keyword} alt="keyword" />
      ) : null}
      <div className="dropdownContent">{content}:</div>
      <div className="dropdownSelect">{select}</div>
      <i className="fas fa-caret-down" aria-hidden />
      {dropwDownShow ? (
        <div className={`childrenRoot ${childrenStyle}`}>{children}</div>
      ) : null}
    </div>
  );
}

export default DatabaseSearchDropdown;
