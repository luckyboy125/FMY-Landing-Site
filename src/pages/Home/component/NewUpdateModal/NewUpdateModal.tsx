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

function NewUpdateModal({ show, onClose }: NewUpdateModalProps): JSX.Element {
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
      query.set('newupdate_category', category);
      navigate({ pathname: location.pathname, search: query.toString() });
      setCategorySelectShow(false);
    },
    [navigate, location.pathname, query]
  );

  const [caseValue, setCaseValue] = useState('');
  const [caseSelectShow, setCaseSelectShow] = useState(false);
  const caseSelectRef = useOutsideClick<HTMLDivElement>(() =>
    setCaseSelectShow(false)
  );

  const handleCase = useCallback(
    (item: string) => {
      query.set('newupdate_case', item);
      navigate({ pathname: location.pathname, search: query.toString() });
      setCaseSelectShow(false);
    },
    [navigate, location.pathname, query]
  );

  const [updateValue, setUpdateValue] = useState('');
  const [attachLinkValue, setAttachLinkValue] = useState('');

  return (
    <ModalLayout show={show} onClose={onClose} className="newUpdataModalRoot">
      <img
        src={CloseIcon}
        className="closeIcon"
        alt="close"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="modalTitle">New update</div>
      <div className="modalInputContent">
        <div className="modalItem">
          <div className="title">Category</div>
          <div className="inputRoot">
            <input
              value={categoryValue}
              placeholder="Write update here"
              onChange={(e) => setCategoryValue(e.target.value)}
              aria-label="Category"
            />
            <div className="plus">+</div>
            <div
              className="roundBtn"
              onClick={() => setCategorySelectShow(!categorySelectShow)}
              role="button"
              tabIndex={0}
            >
              <i className="fas fa-chevron-down" aria-hidden />
              {categorySelectShow ? (
                <div className="selectDropdownRoot" ref={categorySelectRef}>
                  {CATEGORY_SELECT.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className={
                        query.get('newupdate_category') === item
                          ? 'activeItem'
                          : 'item'
                      }
                      onClick={() => handleCategory(item)}
                      role="option"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="modalItem">
          <div className="title">Cases</div>
          <div className="inputRoot">
            <input
              value={caseValue}
              placeholder="Choose case"
              onChange={(e) => setCaseValue(e.target.value)}
              aria-label="Case"
            />
            <div className="plus">+</div>
            <div
              className="roundBtn"
              onClick={() => setCaseSelectShow(!caseSelectShow)}
              role="button"
              tabIndex={0}
            >
              <i className="fas fa-chevron-down" aria-hidden />
              {caseSelectShow ? (
                <div className="selectDropdownRoot" ref={caseSelectRef}>
                  {CASE_SELECT.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className={
                        query.get('newupdate_case') === item
                          ? 'activeItem'
                          : 'item'
                      }
                      onClick={() => handleCase(item)}
                      role="option"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="modalItem">
          <div className="title">Update</div>
          <div className="inputRoot">
            <input
              value={updateValue}
              placeholder="Write update here"
              onChange={(e) => setUpdateValue(e.target.value)}
              aria-label="Update"
            />
          </div>
        </div>
        <div className="modalItem">
          <div className="title">Attach link</div>
          <div className="inputRoot">
            <input
              value={attachLinkValue}
              placeholder="Paste link here..."
              onChange={(e) => setAttachLinkValue(e.target.value)}
              aria-label="Attach link"
            />
          </div>
        </div>
      </div>
      <div className="addLink">+ Add another link</div>
      <div className="updateBtn">Update</div>
    </ModalLayout>
  );
}

export default NewUpdateModal;
