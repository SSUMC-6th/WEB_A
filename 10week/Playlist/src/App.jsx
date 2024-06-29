import "./App.css";
import { StyledContainer } from "./Globalstyle";
import AlbumList from "./components/album/albumList";
import Head from "./components/header/head";

function App() {
  return (
    <>
      <Head />
      <StyledContainer>
        <AlbumList />
      </StyledContainer>
    </>
  );
}

export default App;
