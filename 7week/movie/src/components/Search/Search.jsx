import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyleSearch,
  StyleTitle,
  StyledInput,
  StyledMovieCard,
  StyledMovieList,
  StyledSearchView,
  Poster,
  Overview,
  Title,
  Star,
} from "./Search.style";
import axios from "axios";
import { useDebounce } from "../../hooks/useDebounce";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  const handleSearch = useCallback(async () => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: apiKey,
              query: debouncedSearchTerm,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("영화를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    } else {
      setMovies([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const calculateStars = (vote_average) => {
    const stars = Math.round(vote_average);
    return stars > 0 ? Array(stars).fill("⭐").join("") : "";
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <StyleSearch>
      <StyleTitle>🎥 Find your movies!</StyleTitle>
      <StyledInput
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StyledSearchView>
        {isLoading ? (
          <p>데이터를 받아오는 중입니다.</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <StyledMovieList>
            {debouncedSearchTerm &&
              movies.map((movie) => (
                <StyledMovieCard
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <Poster
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`Movie Poster of ${movie.title}`}
                  />
                  <Title>{movie.title}</Title>
                  <Star>{`Rating: ${calculateStars(movie.vote_average)}`}</Star>
                  <Overview>
                    <p>{movie.overview || "No overview available."}</p>
                  </Overview>
                </StyledMovieCard>
              ))}
          </StyledMovieList>
        )}
      </StyledSearchView>
    </StyleSearch>
  );
};
