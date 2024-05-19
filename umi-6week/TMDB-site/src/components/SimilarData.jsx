// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PosterItem from "./PosterItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 80px;
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 20px;
`;

const MovieContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 12px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  height: fit-content;
  color: white;
  font-size: 32px;
`;

const SubTitle = styled(Title)`
  color: #999;
  margin-right: 12px;
`;

const MoreButton = styled.button`
  width: fit-content;
  color: white;
  padding: 12px 24px;
  background: none;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 999px;
  transition: background-color 0.4s;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

const LoadText = styled.h3`
  color: white;
  margin: 20px 0px;
`;

// eslint-disable-next-line react/prop-types
function SimilarData({ movie_id, selected_movie }) {
  const [movies, setMovies] = useState([]);
  const [more, setMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const onMoreMovies = () => {
    setMore((more) => !more);
  };

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
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results.slice(0, 10)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container>
        <TitleContainer>
          <SubTitle>Movies Similar to </SubTitle>
          <Title>&#60;{selected_movie}&#62;</Title>
        </TitleContainer>
        <MovieWrapper>
          <MovieContainer>
            {loading ? (
              <LoadText>Loading...</LoadText>
            ) : (
              <>
                {movies &&
                  movies
                    .slice(0, 5)
                    .map((movie) => (
                      <PosterItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        voteAverage={Number(movie.vote_average).toFixed(1)}
                        overview={movie.overview}
                        posterPath={movie.poster_path}
                      />
                    ))}
              </>
            )}
            {more ? (
              <>
                {movies &&
                  movies
                    .slice(5, 10)
                    .map((movie) => (
                      <PosterItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        voteAverage={Number(movie.vote_average).toFixed(1)}
                        overview={movie.overview}
                        posterPath={movie.poster_path}
                      />
                    ))}
              </>
            ) : null}
          </MovieContainer>
        </MovieWrapper>
        <MoreButton onClick={onMoreMovies}>
          {more ? "GO BACK ▴" : "SEE MORE ▾"}
        </MoreButton>
      </Container>
    </>
  );
}

export default SimilarData;
