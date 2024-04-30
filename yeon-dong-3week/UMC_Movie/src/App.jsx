import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import MainPage from './components/MainPage';
import MovieDetailPage from './components/MovieDetailPage';
import NowPlayingPage from './components/NowPlayingPage';
import PopularPage from './components/PopularPage';
import TopRatedPage from './components/TopRatedPage';
import UpComing from './components/UpComing';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/detail" element={<MovieDetailPage />}></Route>
          <Route path="/now" element={<NowPlayingPage />}></Route>
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/top" element={<TopRatedPage />}></Route>
          <Route path="/coming" element={<UpComing />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
