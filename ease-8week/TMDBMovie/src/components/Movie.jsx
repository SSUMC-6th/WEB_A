import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Title = styled.div`
    color: white;
    `;

const Poster = styled.div`
    height: 250px;
`;

const Vote = styled.div`
    color: white;
`;

const MovieContainer = styled.div`
    cursor: pointer;
    width: 166.66px;
`;

const MovieImage  = styled.img`
    width: 166.66px;
    height: 250px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`;

const InfoContainer  = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 4% 6% 30%;
    height: 30px;
    gap: 3%;
    background-color: rgba(240, 248, 255, 0.167);
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
`;



function Movie({id, title, poster_path, vote_avg, release_date, overview}){
    const navigate = useNavigate();
    
    return(
        <MovieContainer  onClick={() => {navigate(`/movie/${id}`, {state: {id: id, title: title, poster_path: poster_path, vote_avg: vote_avg, release_date: release_date, overview: overview}})}}>
            <Poster><MovieImage
              alt="movieImage" 
              src= {`https://image.tmdb.org/t/p/w500/${poster_path}`}
            /></Poster>
            <InfoContainer>
                <Title>{title}</Title>
                <Vote>{vote_avg}</Vote>
            </InfoContainer>
        </MovieContainer>
    )
}

export default Movie