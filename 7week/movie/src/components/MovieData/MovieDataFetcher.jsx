import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Center,
  MovieWrapper,
  Overview,
  Poster,
  Star,
  Title,
} from "./MovieDataFetcher.style";
import { useNavigate } from "react-router-dom";

export const MovieDataFetcher = ({
  apiEndpoint,
  apiKey,
  language = "ko-KR",
  page = 1,
}) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${apiEndpoint}`,
          {
            params: {
              api_key: apiKey,
              language: language,
              page: page,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };
    fetchMovies();
  }, [apiEndpoint, apiKey, language, page]);

  return (
    <Center>
      {movies.map((movie, index) => (
        <MovieWrapper key={index} onClick={() => handleImageClick(movie.id)}>
          <Poster
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`Movie Poster ${movie.title}`}
          />
          <div>
            <Title>{movie.title}</Title>
            <Star>{movie.vote_average}</Star>
            <Overview>
              <p>{movie.overview}</p>
            </Overview>
          </div>
        </MovieWrapper>
      ))}
    </Center>
  );
};

MovieDataFetcher.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  language: PropTypes.string,
  page: PropTypes.number,
};
