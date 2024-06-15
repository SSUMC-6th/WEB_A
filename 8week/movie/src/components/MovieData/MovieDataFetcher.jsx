import PropTypes from "prop-types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Center,
  MovieWrapper,
  Overview,
  Poster,
  Star,
  Title,
  TitleAndStarWrapper,
} from "./MovieDataFetcher.style";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const fetchMovies = async (apiEndpoint, apiKey, language, page) => {
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
  return response.data;
};

export const MovieDataFetcher = ({
  apiEndpoint,
  apiKey,
  language = "ko-KR",
  page = 1,
}) => {
  const navigate = useNavigate();

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["movies", apiEndpoint, apiKey, language, page],
    queryFn: () => fetchMovies(apiEndpoint, apiKey, language, page),
    keepPreviousData: true,
  });

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Center>
      {data.results.map((movie) => (
        <MovieWrapper key={movie.id} onClick={() => handleImageClick(movie.id)}>
          <Poster
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`Movie Poster ${movie.title}`}
          />
          <TitleAndStarWrapper>
            <Title>{movie.title}</Title>
            <Star>{movie.vote_average}</Star>
            <Overview>
              <p>{movie.overview}</p>
            </Overview>
          </TitleAndStarWrapper>
        </MovieWrapper>
      ))}
      {isFetching && <LoadingSpinner />}
    </Center>
  );
};

MovieDataFetcher.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  language: PropTypes.string,
  page: PropTypes.number,
};
