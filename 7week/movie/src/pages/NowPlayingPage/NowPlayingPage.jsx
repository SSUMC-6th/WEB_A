import PropTypes from "prop-types";
import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
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
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

const fetchMovies = async (
  { pageParam = 1 },
  apiEndpoint,
  apiKey,
  language
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${apiEndpoint}`,
    {
      params: {
        api_key: apiKey,
        language: language,
        page: pageParam,
      },
    }
  );
  return response.data;
};

export const MovieDataFetcher = ({
  apiEndpoint,
  apiKey,
  language = "ko-KR",
}) => {
  const navigate = useNavigate();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies", apiEndpoint, apiKey, language],
    queryFn: ({ pageParam = 1 }) =>
      fetchMovies({ pageParam }, apiEndpoint, apiKey, language),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const observer = React.useRef();
  const lastMovieElementRef = React.useCallback(
    (element) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (element) observer.current.observe(element);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (isFetching && !isFetchingNextPage) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Center>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.results.map((movie, index) => (
            <MovieWrapper
              key={`${movie.id}-${index}`}
              onClick={() => handleImageClick(movie.id)}
              ref={
                page.results.length === index + 1 ? lastMovieElementRef : null
              }
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
        </React.Fragment>
      ))}
      {isFetchingNextPage && <LoadingSpinner />}
    </Center>
  );
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

MovieDataFetcher.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  language: PropTypes.string,
};
