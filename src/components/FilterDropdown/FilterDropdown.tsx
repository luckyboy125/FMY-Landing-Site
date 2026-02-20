import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import sortIcon from '../../asset/images/sort_icon.svg';
import filterIcon from '../../asset/images/filter_icon.svg';
import chevronIcon from '../../asset/images/chevron_icon.svg';
import './FilterDropdown.css';

export interface FilterDropdownProps {
  className?: string;
  type?: 'filter' | 'sort';
  dropRoot?: React.ReactNode;
  dropRootStyle?: string;
}

function FilterDropdown({
  className = '',
  type = 'filter',
  dropRoot,
  dropRootStyle = ''
}: FilterDropdownProps): JSX.Element {
  const [dropShow, setDropShow] = useState(false);
  const dropDownRootRef = useOutsideClick<HTMLDivElement>(() =>
    setDropShow(false)
  );

  const handleClick = useCallback((event: React.MouseEvent) => {
    setDropShow((prev) => !prev);
    event.stopPropagation();
  }, []);

  return (
    <div
      className={`filterDropdownRoot ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="inputIcon">
        {type === 'filter' ? (
          <img src={filterIcon} alt="filter" />
        ) : (
          <img src={sortIcon} alt="sort" />
        )}
      </div>
      <div className="filterDropdownIconRoot">
        {type === 'filter' ? 'Filter' : 'Sort'}
        <img src={chevronIcon} alt="chevron" />
      </div>
      {dropShow ? (
        <div className={`dropRoot ${dropRootStyle}`} ref={dropDownRootRef}>
          {dropRoot}
        </div>
      ) : null}
    </div>
  );
}

export default FilterDropdown;
