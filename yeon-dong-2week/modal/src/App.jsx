import { useState } from 'react'
import Modal from './components/Modal';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={openModal}>버튼 열기</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}></Modal>
    </>
  )
}

export default App
