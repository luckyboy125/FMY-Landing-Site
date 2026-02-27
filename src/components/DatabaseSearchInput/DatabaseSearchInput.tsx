import { useState, useCallback } from 'react';
import arrow from '../../asset/images/nrds/arrow_down.svg';
import SearchIcon from '../../asset/images/nrds/search_icon.svg';
import './DatabaseSearchInput.css';

export interface DatabaseSearchInputProps {
  className?: string;
}

function DatabaseSearchInput({
  className = '',
}: DatabaseSearchInputProps) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className={`database-search-input ${className}`.trim()}>
      <div className="database-search-input__field">
        <img
          src={SearchIcon}
          alt=""
          className="database-search-input__icon"
          aria-hidden
        />
        <input
          type="search"
          value={value}
          onChange={handleChange}
          className="database-search-input__input"
          placeholder="Insert text here..."
          aria-label="Search"
        />
      </div>
      <button
        type="button"
        className="database-search-input__trigger"
        aria-label="Open filters"
      >
        <img src={arrow} alt="" aria-hidden />
      </button>
    </div>
  );
}

export default DatabaseSearchInput;
