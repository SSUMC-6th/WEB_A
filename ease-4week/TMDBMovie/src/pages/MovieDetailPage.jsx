import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const DetailContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
`;

const MovieImage = styled.img`
    margin-right: 100px;
    width: 300px;
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
      );
}

export default MovieDetailPage