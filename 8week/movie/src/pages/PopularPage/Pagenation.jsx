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
  PaginationWrapper,
  PaginationButton,
  PaginationInfo,
} from "./Pagenation.style";
import { useNavigate } from "react-router-dom";

export const Pagenation = ({ apiEndpoint, apiKey }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
              language: "ko-KR",
              page: currentPage,
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
  }, [apiEndpoint, apiKey, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
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
      <PaginationWrapper>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전 페이지
        </PaginationButton>
        <PaginationInfo>현재 페이지: {currentPage}</PaginationInfo>
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)}>
          다음 페이지
        </PaginationButton>
      </PaginationWrapper>
    </div>
  );
};

Pagenation.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};
