import { useCallback, useEffect, useState } from "react";
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

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

  const handleSearch = useCallback(async () => {
    if (searchTerm) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: apiKey,
              query: searchTerm,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
  }, [searchTerm, apiKey]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const calculateStars = (vote_average) => {
    const stars = Math.round(vote_average);
    return stars > 0 ? Array(stars).fill("⭐").join("") : "";
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
        <StyledMovieList>
          {searchTerm &&
            movies.map((movie) => (
              <StyledMovieCard key={movie.id}>
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
      </StyledSearchView>
    </StyleSearch>
  );
};
