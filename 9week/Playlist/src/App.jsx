import "./App.css";
import AlbumList from "./components/album/albumList";
import { StyledContainer, StyledHeader, StyledTitle } from "./Globalstyle";

function App() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>UMC Playlist</StyledTitle>
      </StyledHeader>
      <AlbumList />
    </StyledContainer>
  );
}

export default App;
