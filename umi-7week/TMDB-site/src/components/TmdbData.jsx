// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import PosterItem from "./PosterItem";
import Loading from "./Loading";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
`;

// eslint-disable-next-line react/prop-types
function TmdbData({ apiType, currentPage }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${apiType}`,
          {
            params: {
              api_key: "d34445da1d00da89ed8e001b7a8286e0",
              language: "en-US",
              page: `${currentPage}`,
            },
          }
        );
        setMovies(response.data.results.slice(0, 18));
        setLoading(false);
      } catch (error) {
        console.error("API 에러", error);
        setMovies([]);
      }
    };
    getMovies();
  }, [currentPage, apiType]);

  return (
    <>
      <Container>
        {loading ? <Loading /> : null}
        {movies &&
          movies.map((movie) => (
            <PosterItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              voteAverage={Number(movie.vote_average).toFixed(1)}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))}
      </Container>
    </>
  );
}

export default TmdbData;
