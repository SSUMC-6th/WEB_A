import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainPage from "./pages/MainPage"
import NowPlayingPage from "./pages/NowPlayingPage"
import PopularPage from "./pages/PopularPage"
import TopRatedPage from "./pages/TopRatedPage"
import UpComing from "./pages/UpComing"


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
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
