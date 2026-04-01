import { useState, useCallback } from 'react';
import { useOutsideClick } from '../../../../hook/DetectOutsideClick';
import { card_type } from '../../../../helpers/home.helper';
import ThreeDotBtn from '../../../../components/ThreeDotBtn/ThreeDotBtn';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';
import ModalLayout from '../../../../components/ModalLayout/ModalLayout';
import person3 from '../../../../asset/person3.svg';
import w3 from '../../../../asset/images/social/w3.svg';
import ball from '../../../../asset/images/social/ball.svg';
import vimeo from '../../../../asset/images/social/vimeo.svg';
import gmail from '../../../../asset/images/social/gmail.svg';
import viber from '../../../../asset/images/social/viber.svg';
import wechat from '../../../../asset/images/social/wechat.svg';
import tiktok from '../../../../asset/images/social/tiktok.svg';
import CloseIcon from '../../../../asset/images/close_icon.svg';
import reddit from '../../../../asset/images/social/reddit.svg';
import youtube from '../../../../asset/images/social/youtube.svg';
import twitter from '../../../../asset/images/social/twitter.svg';
import spotify from '../../../../asset/images/social/spotify.svg';
import behance from '../../../../asset/images/social/behance.svg';
import blogger from '../../../../asset/images/social/blogger.svg';
import facebook from '../../../../asset/images/social/facebook.svg';
import telegram from '../../../../asset/images/social/telegram.svg';
import linkedin from '../../../../asset/images/social/linkedin.svg';
import dribbble from '../../../../asset/images/social/dribbble.svg';
import whatsapp from '../../../../asset/images/social/whatsapp.svg';
import instagram from '../../../../asset/images/social/instagram.svg';
import pinterest from '../../../../asset/images/social/pinterest.svg';
import './CommentModal.css';

export interface CommentModalProps {
  className?: string;
  show: boolean;
  onClose: () => void;
  type: string;
}

function CommentModal({
  className = '',
  show,
  onClose,
  type
}: CommentModalProps) {
  const [commentArea, setCommentArea] = useState('');
  const [settingDropdownShow, setSettingDropdownShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const settingDropdownRef = useOutsideClick<HTMLDivElement>(() =>
    setSettingDropdownShow(false)
  );

  const toggleSetting = useCallback(() => {
    setSettingDropdownShow((prev) => !prev);
  }, []);

  return (
    <ModalLayout
      show={show}
      className={`comment-modal ${className}`}
      onClose={onClose}
    >
      <ThreeDotBtn className="comment-modal__setting" action={toggleSetting} />
      <img
        src={CloseIcon}
        className="comment-modal__close-icon"
        alt="close"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      {settingDropdownShow ? (
        <div
          className="comment-modal__setting-dropdown"
          ref={settingDropdownRef}
        >
          <div className="comment-modal__dropdown-item">
            <div className="comment-modal__dropdown-item-content">
              Edit <i className="fas fa-pen" aria-hidden />
            </div>
          </div>
          <div className="comment-modal__dropdown-item">
            <div
              className="comment-modal__dropdown-item-content"
              onClick={() => setDeleteModalShow(true)}
              role="button"
              tabIndex={0}
            >
              Delete <i className="fas fa-trash-alt" aria-hidden />
            </div>
          </div>
        </div>
      ) : null}
      {type === card_type.boycott.title ? (
        <>
          <div className="comment-modal__header">
            <div className="comment-modal__title">
              Hezbollah called out for boycotting the <br /> elections in
              Bahrain.
            </div>
          </div>
          <div className="comment-modal__content">
            <div className="comment-modal__left">
              <div className="comment-modal__left-1">
                <div className="comment-modal__left-item-1">
                  <div className="comment-modal__item-title">Update date:</div>
                  31 October 2022
                </div>
                <div className="comment-modal__left-item-2">
                  <div className="comment-modal__item-title ">Username:</div>
                  <img src={person3} alt="avatar" />
                  Nimrod Ben Efraim
                </div>
              </div>
              <div className="comment-modal__left-2">
                <div className="comment-modal__item-title">Cases:</div>
                <div className="comment-modal__button">Lorem ipsum</div>
                <div className="comment-modal__plus">+</div>
              </div>
              <div className="comment-modal__left-3">
                <div className="comment-modal__item-title">Links:</div>
                <div className="comment-modal__social-root">
                  <img src={instagram} alt="social" />
                  <img src={facebook} alt="social" />
                  <img src={twitter} alt="social" />
                  <img src={tiktok} alt="social" />
                  <img src={reddit} alt="social" />
                  <img src={telegram} alt="social" />
                  <img src={youtube} alt="social" />
                  <img src={w3} alt="social" />
                </div>
              </div>
              <div className="comment-modal__left-4">
                <div className="comment-modal__item-title">Comments</div>
                <div className="comment-modal__comments-root">
                  <img src={person3} alt="avatar" />
                  <div>
                    <div className="comment-modal__comment-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque cras felis interdum tempor, lobortis egestas
                      volutpat consectetur.....
                    </div>
                    <div className="comment-modal__comment-date">
                      Feb 6, 11:49 AM
                    </div>
                  </div>
                  <ThreeDotBtn action={() => {}} />
                </div>
                <div className="comment-modal__comments-input">
                  <textarea
                    placeholder="Comment here"
                    value={commentArea}
                    onChange={(e) => setCommentArea(e.target.value)}
                    aria-label="Comment"
                  />
                  <div className="comment-modal__post-button">Post</div>
                  <ThreeDotBtn
                    className="comment-modal__more-setting"
                    action={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="comment-modal__right">
              <div className="comment-modal__upload-file">+</div>
            </div>
          </div>
        </>
      ) : type === card_type.newupdate.title ? (
        <div className="comment-modal__modal-container">
          <div className="comment-modal__modal-left">
            <div className="comment-modal__title-button">New update</div>
            <div className="comment-modal__title-description">
              The death of a young woman at King Herzog hospital has finally
              promoted the country's lawmakers to promise an investigation into
              claims of medical negligence at the state-run facility. The
              Government Reminds that Guatama citizens are entitled to recive
              free treatment without limit at all government medical facilities.
              A campaign regarding this is issue is being evident on all major
              social media platforms
            </div>
            <div className="comment-modal__upload-file">+</div>
          </div>
          <div className="comment-modal__divider" />
          <div className="comment-modal__modal-right">
            <div className="comment-modal__right-1">
              <div className="comment-modal__right-item-1">
                Upload date:
                <div className="comment-modal__date">31 October 2022</div>
              </div>
              <div className="comment-modal__right-item-2">
                Username:
                <img src={person3} alt="avatar" />
                <div className="comment-modal__name">Nimrod Ben Efraim</div>
              </div>
            </div>
            <div className="comment-modal__right-2">
              <div className="comment-modal__section-title">Cases:</div>
              <div className="comment-modal__button ">Lorem ipsum</div>
              <div className="comment-modal__button ">Lorem ipsum</div>
              <div className="comment-modal__button ">Lorem ipsum</div>
              <div className="comment-modal__plus">+</div>
            </div>
            <div className="comment-modal__right-3">
              <div className="comment-comment-modal__section-title">Links:</div>
              <div className="comment-modal__social-root">
                <img src={instagram} alt="social" />
                <img src={facebook} alt="social" />
                <img src={twitter} alt="social" />
                <img src={tiktok} alt="social" />
                <img src={reddit} alt="social" />
                <img src={telegram} alt="social" />
                <img src={youtube} alt="social" />
                <img src={linkedin} alt="social" />
                <img src={dribbble} alt="social" />
                <img src={behance} alt="social" />
                <img src={pinterest} alt="social" />
                <img src={whatsapp} alt="social" />
                <img src={ball} alt="social" />
                <img src={spotify} alt="social" />
                <img src={w3} alt="social" />
              </div>
              <div className="comment-modal__social-root-2">
                <img src={viber} alt="social" />
                <img src={vimeo} alt="social" />
                <img src={gmail} alt="social" />
                <img src={blogger} alt="social" />
                <img src={wechat} alt="social" />
              </div>
            </div>
            <div className="comment-modal__right-4">
              <div className="comment-modal__section-title">Comments</div>
              <div className="comment-modal__comments-root">
                <img src={person3} alt="avatar" />
                <div>
                  <div className="comment-modal__comment-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque cras felis interdum tempor, lobortis egestas
                    volutpat consectetur.....
                  </div>
                  <div className="comment-modal__comment-date">
                    Feb 6, 11:49 AM
                  </div>
                </div>
                <ThreeDotBtn action={() => {}} />
              </div>
              <div className="comment-modal__comments-input">
                <textarea
                  placeholder="Comment here"
                  value={commentArea}
                  onChange={(e) => setCommentArea(e.target.value)}
                  aria-label="Comment"
                />
                <div className="comment-modal__post-button">Post</div>
                <ThreeDotBtn
                  className="comment-modal__more-setting"
                  action={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <DeleteModal
        show={deleteModalShow}
        onClose={() => setDeleteModalShow(false)}
        className="commentModal__delete-modal"
        message="Are you sure you want to delete the item?"
      />
    </ModalLayout>
  );
}

export default CommentModal;
