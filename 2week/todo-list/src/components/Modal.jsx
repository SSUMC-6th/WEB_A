import React from 'react';

function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <div className="close-wrapper">
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
