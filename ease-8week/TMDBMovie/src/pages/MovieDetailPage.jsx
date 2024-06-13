import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Credit from '../components/Credit'



const Background = styled.div`
  background-image: url(${props => `https://image.tmdb.org/t/p/w500/${props.poster_path}`});
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -99;
  ::before{
    position: absolute;
    content: "";
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.09);
    z-index: -100;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const DetailContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center; // 가로 중앙 정렬
    align-items: center; // 세로 중앙 정렬
    height: 100vh; // 뷰포트의 전체 높이
    width: 80%; // 너비를 80%로 설정, 원하는 대로 조절 가능
    @media (max-width: 768px){
    flex-direction: column;
    margin-top: 100px;
    }
    `;

const MovieImage = styled.img`
    margin-right: 100px;
    width: 300px;
    border-radius: 10px;
    @media (max-width: 768px){
    margin-right: 0;
    margin-bottom: 20px;
    width: 250px;
    }
    @media (max-width: 400px){
    width: 200px;
    margin-top: 100px;
    }
`;

const Title = styled.h1`
    color: white;
`;
const Vote = styled.div`
color: white;
display: flex;
`;
const Star = styled.div`
display: flex;
`;
const Date = styled.div`
color: white;
`;
const Overview = styled.div`
color: white;
display: flex;
flex-direction: column;
`;

function MovieDetailPage() {
    const { state } = useLocation();
    const { id } = useParams();
    console.log(id);
    const title = state && state.title;
    const poster_path = state && state.poster_path;
    const vote_avg = state && state.vote_avg;
    const release_date = state && state.release_date;
    const overview = state && state.overview;
    console.log(state);

    const starCnt = Math.floor(vote_avg);
    const stars=[];
    for (let i=0; i<starCnt; i++){
        stars.push(<div key={i}>⭐️</div>);
    }

    return (
        <PageContainer>
        <Background poster_path={poster_path}>
        <DetailContainer>
          <MovieImage
            alt="movieImage"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
          <div>
            <Title>{title}</Title>
            <Vote>평점 <Star>{stars}</Star></Vote>
            <Date>개봉일 {release_date}</Date>
            <Overview><div>줄거리</div> <div>{overview}</div></Overview>
          </div>
        </DetailContainer>
        </Background>
        <Credit id={id}/>
        </PageContainer>
        
      );
}

export default MovieDetailPage