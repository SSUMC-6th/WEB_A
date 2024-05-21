// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PosterItem from "./PosterItem";
import axios from "axios";

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

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
          {
            params: {
              api_key: "d34445da1d00da89ed8e001b7a8286e0",
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("API 에러", error);
        setMovies([]);
      }
    };
    getMovies();
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
