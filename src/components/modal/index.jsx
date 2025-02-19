import React from "react";
import "./style.css";

const Modal = ({ title, setShowModal, children }) => {
  const handleCloseModal = (_e) => {
    if (_e.target.className === "modal-wrapper") {
      setShowModal(false);
    }
  };
  return (
    <div>
      <div className="modal-wrapper" onClick={(_e) => handleCloseModal(_e)}>
        <div className="modal-content">
          <div className="modal-title">
            <div>{title}</div>
            <div className="closeModalBtn" onClick={() => setShowModal(false)}>
              <img
                src="/cross.png"
                width="16px"
                height="16px"
                alt="close modal"
              />
            </div>
          </div>
          <div className="children-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
