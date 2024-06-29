import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/*" element={<RouteNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function RouteNotFound() {
  alert('에러가 발생했습니다. 데이터 요청 경로를 확인해주세요!');
  return <Navigate to="/" replace />;
}

export default App