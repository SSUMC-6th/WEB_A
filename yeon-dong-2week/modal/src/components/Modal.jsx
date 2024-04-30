import { useState } from 'react'
import '../App.css'

function Modal({isOpen,closeModal}) {
  return (
    <>
        <div className="modal-wrapper" style={{display: isOpen ? "block" : "none"}}>
            <div className="modal">
                <div className="modal-title">안녕하세요</div>
                <p>모달 내용은 어쩌고 저쩌고..</p>
                <div className="close-wrapper">
                <button onClick={closeModal}>닫기</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal