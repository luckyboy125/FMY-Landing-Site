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
      <div className={`hashtagSelectInputRoot ${className ?? ''}`}>
        <div className="selectContent">
          <div className="select">
            Messi <img src={closeIcon} alt="closeIcon" />
          </div>
          <div className="select">
            Ramos <img src={closeIcon} alt="closeIcon" />
          </div>
          <div className="select">
            Mumbapee <img src={closeIcon} alt="closeIcon" />
          </div>
        </div>
        <div className="selectRoot">
          Last 7 Days <i className="fas fa-caret-down"></i>
        </div>
        <div className="searchBtn">
          <img src={searchIcon} alt="search_icon" />
        </div>
      </div>
    </>
  );
}

export default HashtagSelectInput;
