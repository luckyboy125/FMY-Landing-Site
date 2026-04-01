import closeIcon from '../../../../asset/images/close_icon.svg';
import searchIcon from '../../../../asset/images/search_icon.svg';
import './HashtagSelectInput.css';

export interface HashtagSelectInputProps {
  className?: string;
}

function HashtagSelectInput({
  className
}: HashtagSelectInputProps) {
  return (
    <>
      <div className={`hashtag-select-input ${className ?? ''}`}>
        <div className="hashtag-select-input__tags">
          <div className="hashtag-select-input__tag">
            Messi <img src={closeIcon} alt="closeIcon" />
          </div>
          <div className="hashtag-select-input__tag">
            Ramos <img src={closeIcon} alt="closeIcon" />
          </div>
          <div className="hashtag-select-input__tag">
            Mumbapee <img src={closeIcon} alt="closeIcon" />
          </div>
        </div>
        <div className="hashtag-select-input__period">
          Last 7 Days <i className="fas fa-caret-down"></i>
        </div>
        <div className="hashtag-select-input__search-btn">
          <img src={searchIcon} alt="search_icon" />
        </div>
      </div>
    </>
  );
}

export default HashtagSelectInput;
