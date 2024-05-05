// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import "./Page.css";
import PosterItem from "../components/PosterItem";
import Loading from "../components/Loading";

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ0NDVkYTFkMDBkYTg5ZWQ4ZTAwMWI3YTgyODZlMCIsInN1YiI6IjY1YzFkZTIxOGU4ZDMwMDE2Mjc3ZDE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzdBlisLcPNQkSG7QN-39G7eW1rERKixo8VH5Ym3mwc",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        {loading ? <Loading /> : null}
        {movies &&
          movies.map((movie) => (
            <PosterItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              voteAverage={movie.vote_average}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))}
      </div>
    </>
  );
}

export default PopularPage;
