// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Loading } from "../assets/rolling2.gif";
import useFetch from "../hooks/useFetch";
import { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PosterItem from "../components/PosterItem";
import Loading from "../components/Loading";

const Container = styled.div`
  margin: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
`;

function NowPlayingPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, movies } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <Container>
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
        {loading && <Loading />}
        {error && <p>Error!</p>}
        <div ref={loader} />
      </Container>
    </>
  );
}

export default NowPlayingPage;
