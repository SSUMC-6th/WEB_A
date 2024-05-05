// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpComing";
import ErrorPage from "./pages/ErrorPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nowplaying" element={<NowPlayingPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:title/:id" element={<MovieDetailPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
