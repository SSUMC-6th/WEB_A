// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CreditData from "../components/CreditData";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(rgba(40, 43, 49, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.image});
  background-size: cover;
  left: 50%;
  transform: translate(-50%);
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  transform: translate(50%, 45%);
  color: white;
  img {
    border-radius: 8px;
  }
`;

const OverviewContainer = styled.div`
  width: 400px;
  text-align: left;
  margin-left: 60px;
  margin-top: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  overflow: hidden;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
`;

const Title = styled.h2`
  color: white;
`;

const Text = styled.div`
  color: white;
  margin-right: 12px;
`;

const Box = styled.div``;

const LoadImage = styled.div`
  width: 300px;
  height: 440px;
  background-color: #444;
  border-radius: 8px;
`;

function MovieDetailPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
    //영화정보
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  const starCount = () => {
    const star = [];
    for (let i = 0; i < Math.floor(movies.vote_average); i++) {
      star.push("⭐️ ");
    }
    return star;
  };

  return (
    <>
      <Background
        image={`https://image.tmdb.org/t/p/w200${movies.backdrop_path}`}
      >
        <Blur>
          <Container>
            {loading ? (
              <LoadImage />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                width="300px"
                height="440px"
              />
            )}
            <OverviewContainer>
              <Title>{movies.title}</Title>
              <InfoContainer>
                <Text>평점</Text>
                <Box>{starCount()}</Box>
              </InfoContainer>
              <InfoContainer>
                <Text>개봉일</Text>
                <Box>{movies.release_date}</Box>
              </InfoContainer>
              <Box>
                <Text>줄거리</Text>
                <Overview>
                  {movies.overview == ""
                    ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                    : movies.overview}
                </Overview>
              </Box>
            </OverviewContainer>
          </Container>
        </Blur>
        <CreditData movie_id={id} />
      </Background>
    </>
  );
}

export default MovieDetailPage;
