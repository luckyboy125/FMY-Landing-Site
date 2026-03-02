import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../hook/DetectOutsideClick';
import sortIcon from '../../asset/images/sort_icon.svg';
import filterIcon from '../../asset/images/filter_icon.svg';
import chevronIcon from '../../asset/images/chevron_icon.svg';
import './FilterDropdown.css';

export interface FilterDropdownProps {
  className?: string;
  type?: 'filter' | 'sort';
  panelContent?: React.ReactNode;
  panelClassName?: string;
}

function FilterDropdown({
  className = '',
  type = 'filter',
  panelContent,
  panelClassName = '',
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const handleClick = useCallback((event: React.MouseEvent) => {
    setIsOpen((prev) => !prev);
    event.stopPropagation();
  }, []);

  const label = type === 'filter' ? 'Filter' : 'Sort';

  return (
    <div
      className={`filter-dropdown ${className}`.trim()}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && (setIsOpen((p) => !p), e.stopPropagation())}
    >
      <div className="filter-dropdown__icon" aria-hidden>
        {type === 'filter' ? (
          <img src={filterIcon} alt="" />
        ) : (
          <img src={sortIcon} alt="" />
        )}
      </div>
      <div className="filter-dropdown__label">
        <span>{label}</span>
        <img src={chevronIcon} alt="" className="filter-dropdown__caret" aria-hidden />
      </div>
      {isOpen ? (
        <div
          className={`filter-dropdown__panel ${panelClassName}`.trim()}
          ref={panelRef}
        >
          {panelContent}
        </div>
      ) : null}
    </div>
  );
}

export default FilterDropdown;
