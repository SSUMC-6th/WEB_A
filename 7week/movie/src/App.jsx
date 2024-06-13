import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/\bfooter/footer";
import { Nav } from "./components/nav/nav";
import { MainPage } from "./pages/MainPage/MainPage";
import { Popular } from "./pages/PopularPage/PopularPage";
import { NowPlaying } from "./pages/NowPlayingPage/NowPlayingPage";
import { TopRated } from "./pages/TopRatedPage/TopRatedPage";
import { Upcoming } from "./pages/UpComing/UpComing";
import { GlobalStyle } from "./styles/GlobalStyle";
import { NotFound } from "./components/notfound/notFound";
import { MovieDetail } from "./pages/Moviedetail/MovieDetail";
import { SignUp } from "./pages/SignUpPage/SignUp";
import { Login } from "./pages/LoginPage/Login";
import { UserProvider } from "./components/UserData/UsetData";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
