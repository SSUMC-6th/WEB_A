import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Center,
  MovieWrapper,
  Overview,
  Poster,
  Star,
  Title,
} from "../../components/MovieData/MovieDataFetcher.style";

const MovieDataFetcher = ({ apiEndpoint, apiKey, language = "ko-KR" }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const navigate = useNavigate();

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const fetchMovies = useCallback(
    async (page) => {
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
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        setHasMore(response.data.page < response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    [apiEndpoint, apiKey, language]
  );

  useEffect(() => {
    fetchMovies(page);
  }, [fetchMovies, page]);

  const lastMovieElementRef = useCallback(
    (element) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (element) observer.current.observe(element);
    },
    [hasMore]
  );

  return (
    <Center>
      {movies.map((movie, index) => (
        <MovieWrapper
          key={`${movie.id}-${index}`}
          onClick={() => handleImageClick(movie.id)}
          ref={movies.length === index + 1 ? lastMovieElementRef : null}
        >
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
};

export const NowPlaying = () => {
  const apiKey = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

  return (
    <div>
      <MovieDataFetcher apiEndpoint="now_playing" apiKey={apiKey} />
      <div>NowPlaying</div>
    </div>
  );
};
