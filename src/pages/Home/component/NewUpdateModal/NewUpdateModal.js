import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../../../hook/DetectOutsideClick";
import ModalLayout from "../../../../components/ModalLayout/ModalLayout";
import CloseIcon from "../../../../asset/images/close_icon.svg";
import "./NewUpdateModal.css";

function NewUpdateModal({ show, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [categoryValue, setCategoryValue] = useState("");
  const [categorySelectShow, setCategorySelectShow] = useState(false);
  const categorySelectRef = useOutsideClick(() => setCategorySelectShow(false));
  const categorySelect = [
    "News update",
    "Event",
    "Human rights",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const handlCategory = (category) => {
    query.set("newupdate_category", category);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
    setCategorySelectShow(false);
  };

  const [caseValue, setCaseValue] = useState("");

  const [caseSelectShow, setCaseSelectShow] = useState(false);
  const caseSelectRef = useOutsideClick(() => setCaseSelectShow(false));
  const caseSelect = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Human rights",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  const handlCase = (item) => {
    query.set("newupdate_case", item);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
    setCaseSelectShow(false);
  };

  const [updateValue, setUpdateValue] = useState("");
  const [attachLinkValue, setAttachLinkValue] = useState("");

  return (
    <ModalLayout show={show} onClose={onClose} className="newUpdataModalRoot">
      <img
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={onClose}
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
            />
            <div className="plus">+</div>
            <div
              className="roundBtn"
              onClick={() => setCategorySelectShow(!categorySelectShow)}
            >
              <i className="fas fa-chevron-down" />
              {categorySelectShow ? (
                <div className="selectDropdownRoot" ref={categorySelectRef}>
                  {categorySelect.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          query.get("newupdate_category") === item
                            ? "activeItem"
                            : "item"
                        }`}
                        onClick={() => handlCategory(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
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
            />
            <div className="plus">+</div>
            <div
              className="roundBtn"
              onClick={() => setCaseSelectShow(!caseSelectShow)}
            >
              <i className="fas fa-chevron-down" />
              {caseSelectShow ? (
                <div className="selectDropdownRoot" ref={caseSelectRef}>
                  {caseSelect.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          query.get("newupdate_case") === item
                            ? "activeItem"
                            : "item"
                        }`}
                        onClick={() => handlCase(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
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
