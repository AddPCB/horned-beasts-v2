import React from 'react';
import HornedBeast from './HornedBeast';
import '../css/Modal.css';

function Modal({ beast, handleModal }) {
  return (
    <div className="modal-background" onClick={handleModal}>
      {beast ? (
        <div className="modal-container">
          <HornedBeast beast={beast} isModal handleModal={handleModal} />
        </div>
      ) : null}
    </div>
  );
}

export default Modal;