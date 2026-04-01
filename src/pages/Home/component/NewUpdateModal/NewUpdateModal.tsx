import { useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOutsideClick } from '../../../../hook/DetectOutsideClick';
import ModalLayout from '../../../../components/ModalLayout/ModalLayout';
import CloseIcon from '../../../../asset/images/close_icon.svg';
import './NewUpdateModal.css';

export interface NewUpdateModalProps {
  show: boolean;
  onClose: () => void;
}

const CATEGORY_SELECT = [
  'News update',
  'Event',
  'Human rights',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum'
];

const CASE_SELECT = [
  'Lorem ipsum',
  'Lorem ipsum',
  'Human rights',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum'
];

function NewUpdateModal({ show, onClose }: NewUpdateModalProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [categoryValue, setCategoryValue] = useState('');
  const [categorySelectShow, setCategorySelectShow] = useState(false);
  const categorySelectRef = useOutsideClick<HTMLDivElement>(() =>
    setCategorySelectShow(false)
  );

  const handleCategory = useCallback(
    (category: string) => {
      const next = new URLSearchParams(location.search);
      next.set('newupdate_category', category);
      navigate({ pathname: location.pathname, search: next.toString() });
      setCategorySelectShow(false);
    },
    [navigate, location.pathname, location.search]
  );

  const [caseValue, setCaseValue] = useState('');
  const [caseSelectShow, setCaseSelectShow] = useState(false);
  const caseSelectRef = useOutsideClick<HTMLDivElement>(() =>
    setCaseSelectShow(false)
  );

  const handleCase = useCallback(
    (item: string) => {
      const next = new URLSearchParams(location.search);
      next.set('newupdate_case', item);
      navigate({ pathname: location.pathname, search: next.toString() });
      setCaseSelectShow(false);
    },
    [navigate, location.pathname, location.search]
  );

  const [updateValue, setUpdateValue] = useState('');
  const [attachLinkValue, setAttachLinkValue] = useState('');

  return (
    <ModalLayout show={show} onClose={onClose} className="new-update-modal">
      <img
        src={CloseIcon}
        className="new-update-modal__close-icon"
        alt="close"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="new-update-modal__title">New update</div>
      <div className="new-update-modal__input-content">
        <div className="new-update-modal__item">
          <div className="new-update-modal__item-title">Category</div>
          <div className="new-update-modal__input">
            <input
              value={categoryValue}
              placeholder="Write update here"
              onChange={(e) => setCategoryValue(e.target.value)}
              aria-label="Category"
            />
            <div className="new-update-modal__plus">+</div>
            <div
              className="new-update-modal__round-btn"
              onClick={() => setCategorySelectShow(!categorySelectShow)}
              role="button"
              tabIndex={0}
            >
              <i className="fas fa-chevron-down" aria-hidden />
              {categorySelectShow ? (
                <div className="new-update-modal__select-dropdown" ref={categorySelectRef}>
                  {CATEGORY_SELECT.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className={
                        query.get('newupdate_category') === item
                          ? 'new-update-modal__select-item--active'
                          : 'new-update-modal__select-item'
                      }
                      onClick={() => handleCategory(item)}
                      role="option"
                      aria-selected={query.get('newupdate_category') === item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="new-update-modal__item">
          <div className="new-update-modal__item-title">Cases</div>
          <div className="new-update-modal__input">
            <input
              value={caseValue}
              placeholder="Choose case"
              onChange={(e) => setCaseValue(e.target.value)}
              aria-label="Case"
            />
            <div className="new-update-modal__plus">+</div>
            <div
              className="new-update-modal__round-btn"
              onClick={() => setCaseSelectShow(!caseSelectShow)}
              role="button"
              tabIndex={0}
            >
              <i className="fas fa-chevron-down" aria-hidden />
              {caseSelectShow ? (
                <div className="new-update-modal__select-dropdown" ref={caseSelectRef}>
                  {CASE_SELECT.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className={
                        query.get('newupdate_case') === item
                          ? 'new-update-modal__select-item--active'
                          : 'new-update-modal__select-item'
                      }
                      onClick={() => handleCase(item)}
                      role="option"
                      aria-selected={query.get('newupdate_case') === item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="new-update-modal__item">
          <div className="new-update-modal__item-title">Update</div>
          <div className="new-update-modal__input">
            <input
              value={updateValue}
              placeholder="Write update here"
              onChange={(e) => setUpdateValue(e.target.value)}
              aria-label="Update"
            />
          </div>
        </div>
        <div className="new-update-modal__item">
          <div className="new-update-modal__item-title">Attach link</div>
          <div className="new-update-modal__input">
            <input
              value={attachLinkValue}
              placeholder="Paste link here..."
              onChange={(e) => setAttachLinkValue(e.target.value)}
              aria-label="Attach link"
            />
          </div>
        </div>
      </div>
      <div className="new-update-modal__add-link">+ Add another link</div>
      <div className="new-update-modal__update-btn">Update</div>
    </ModalLayout>
  );
}

export default NewUpdateModal;
