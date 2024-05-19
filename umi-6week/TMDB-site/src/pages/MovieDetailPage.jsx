// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CreditData from "../components/CreditData";
import axios from "axios";
import SimilarData from "../components/SimilarData";

const Wrapper = styled.div`
  height: fit-content;
`;

const Background = styled.div`
  width: 100vw;
  height: 74vh;
  background-image: linear-gradient(rgba(40, 43, 49, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.image});
  background-size: cover;
  left: 50%;
`;

const Blur = styled.div`
  width: 100vw;
  height: 80vh;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  text-align: center;
  justify-content: center;
  transform: translate(0, 18vh);
  color: white;
  img {
    border-radius: 8px;
  }
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const OverviewContainer = styled.div`
  width: 48vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 60px;
  margin-top: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 8vw;
`;

const Overview = styled.p`
  width: 40vw;
  overflow: hidden;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
  margin: 0;
`;

const PosterImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 240px;
  height: 360px;
  border-radius: 8px;
`;

const LoadImage = styled.div`
  width: 300px;
  height: 440px;
  background-color: #444;
  border-radius: 8px;
`;

const SubTitle = styled.div`
  display: flex;
`;

const SubText = styled.div`
  color: #999;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #888;
  margin: 6px 0px 2px 0px;
`;

function MovieDetailPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "d34445da1d00da89ed8e001b7a8286e0",
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("API 에러", error);
        setMovies([]);
      }
    };
    getMovies();
  }, []);

  // const starCount = () => {
  //   const star = [];
  //   for (let i = 0; i < Math.floor(movies.vote_average); i++) {
  //     star.push("⭐️ ");
  //   }
  //   return star;
  // };

  return (
    <Wrapper>
      <Background
        image={`https://image.tmdb.org/t/p/w200${movies.backdrop_path}`}
      >
        <Blur>
          <Container>
            {loading ? (
              <LoadImage />
            ) : (
              <PosterImage
                image={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
              />
            )}
            <OverviewContainer>
              <TitleContainer>
                <Title>{movies.title}</Title>
                <SubTitle>
                  <SubText>{movies.origin_country} ・ </SubText>
                  <SubText>{movies.runtime}분 </SubText>
                </SubTitle>
              </TitleContainer>
              {loading ? null : (
                <InfoContainer>
                  <Title>⭐️ {Number(movies.vote_average).toFixed(1)}</Title>
                  <Line></Line>
                  <Overview>
                    {movies.overview == ""
                      ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                      : movies.overview}
                  </Overview>
                </InfoContainer>
              )}
            </OverviewContainer>
          </Container>
        </Blur>
      </Background>
      <CreditData movie_id={id} />
      <SimilarData movie_id={id} selected_movie={movies.title} />
    </Wrapper>
  );
}

export default MovieDetailPage;
