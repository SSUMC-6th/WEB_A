import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import NowPlayingPage from "./pages/NowPlayingPage"
import PopularPage from "./pages/PopularPage"
import TopRatedPage from "./pages/TopRatedPage"
import UpComing from "./pages/UpComing"
import MovieDetailPage from "./pages/MovieDetailPage"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element= {<MainPage/>}/>
        <Route path="/nowplaying" element= {<NowPlayingPage/>}/>
        <Route path="/popular" element= {<PopularPage/>}/>
        <Route path="/toprated" element= {<TopRatedPage/>}/>
        <Route path="/upcoming" element= {<UpComing/>}/>
        <Route path="/movie/:id" element= {<MovieDetailPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
