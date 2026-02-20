import { useState, useCallback } from 'react';
import { card_type, type CardTypeKey } from '../../../../helpers/home.helper';
import CommentModal from '../CommentModal/CommentModal';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import Person3 from '../../../../asset/person3.svg';
import instagram from '../../../../asset/images/social/instagram.svg';
import facebook from '../../../../asset/images/social/facebook.svg';
import twitter from '../../../../asset/images/social/twitter.svg';
import tiktok from '../../../../asset/images/social/tiktok.svg';
import reddit from '../../../../asset/images/social/reddit.svg';
import viber from '../../../../asset/images/social/viber.svg';
import vimeo from '../../../../asset/images/social/vimeo.svg';
import gmail from '../../../../asset/images/social/gmail.svg';
import blogger from '../../../../asset/images/social/blogger.svg';
import telegram from '../../../../asset/images/social/telegram.svg';
import './HomeCard.css';

export interface HomeCardProps {
  className?: string;
  cardType: CardTypeKey;
  cardContent: string;
  author: string;
  cardDate: string;
  commentType?: CardTypeKey;
}

function HomeCard({
  className = '',
  cardType,
  cardContent,
  author,
  cardDate,
  commentType
}: HomeCardProps): JSX.Element {
  const [modalShow, setModalShow] = useState(false);

  const openComment = useCallback(() => setModalShow(true), []);
  const closeComment = useCallback(() => setModalShow(false), []);

  const typeInfo = card_type[cardType];

  return (
    <>
      <div className={`homeCardRoot ${className}`}>
        <ThreeDotBtn className="dotBtn" action={() => {}} />
        <div className="cardTitle" style={{ backgroundColor: typeInfo.color }}>
          {typeInfo.title}
        </div>
        <div className="cardName">{cardContent}</div>
        <div className="cardAuthor">
          <img src={Person3} className="authorAvatar" alt="avatar" />
          {author}
        </div>
        <div className="cardDate">{cardDate}</div>
        <div className="cardIconSocial">
          <div className="front">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={tiktok} alt="tiktok" />
            <img src={reddit} alt="reddit" />
            <img src={viber} alt="viber" />
            <img src={vimeo} alt="vimeo" />
            <img src={gmail} alt="gmail" />
            <img src={blogger} alt="blogger" />
            <img src={telegram} alt="telegram" />
          </div>
          {commentType ? (
            <div
              className="commentBtn"
              onClick={openComment}
              role="button"
              tabIndex={0}
            >
              View
            </div>
          ) : null}
        </div>
      </div>
      <CommentModal
        show={modalShow}
        onClose={closeComment}
        type={typeInfo.title}
      />
    </>
  );
}

export default HomeCard;
