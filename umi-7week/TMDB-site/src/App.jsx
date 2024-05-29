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
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import ScrollToTop from "./components/ScrollTop";
import { AuthProvider } from "./components/UserData";

function App() {
  return (
    <>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
        <Navbar />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
