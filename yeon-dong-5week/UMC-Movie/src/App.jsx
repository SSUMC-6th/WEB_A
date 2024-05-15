import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage/MainPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import UpComingPage from "./pages/UpComingPage/UpComingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
          <Route path="/now" element={<NowPlayingPage />}></Route>
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/top" element={<TopRatedPage />}></Route>
          <Route path="/coming" element={<UpComingPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
