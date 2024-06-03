import {StyledMainPage, SearchContainer, SearchInput, SearchButton, MovieContainer, MovieInfo, MovieInfoContent, StyledMovieContainer, StyledLodingText} from "./MainPage.style"
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../components/AuthContext/AuthContext";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function MainPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [movies, setMovies] = useState([]);
  const { username } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    // Clean up the timeout if the component unmounts or the search term changes
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    // TMDB API에서 현재 상영 중인 영화를 가져오는 함수
    const fetchMovies = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI1MmVkNjFlMDYxNGNhMDQyZjcwODkyNGEzZjQ4NiIsInN1YiI6IjY2MmYzMGZhMWYwMjc1MDEyNzE0YjEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jij4E68Nlz6-XTtOtRQ13tHnq-5Vfx9pIdKMVs09EEU'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
      setLoading(false);
    };
    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    if (debouncedSearch) {
      fetchMovies();
    }
  }, [debouncedSearch]); // 배열을 전달하여 한 번만 호출되도록 설정

  return (
    <>
      <StyledMainPage>{username ? `${username}님 환영합니다` : '환영합니다'}</StyledMainPage>
      <SearchContainer>
        <SearchInput placeholder="영화를 검색해보세요!" onChange={(e) => setSearch(e.target.value)}></SearchInput>
        <SearchButton></SearchButton>
      </SearchContainer>
      <StyledMovieContainer>
        {loading ? (<StyledLodingText>데이터를 받아오는 중 입니다</StyledLodingText>) : (
          <MovieContainer>
            {movies.map(movie => (
              <MovieInfo key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                {movie.poster_path && (
                  <img src={IMG_BASE_URL + movie.poster_path} alt='영화포스터' />
                )}
                <MovieInfoContent>
                  <h4>{movie.title}</h4>
                  <span>{movie.vote_average}</span>
                </MovieInfoContent>
              </MovieInfo>
            ))}
          </MovieContainer>
        )}
      </StyledMovieContainer>
    </>
  );
}

export default MainPage;