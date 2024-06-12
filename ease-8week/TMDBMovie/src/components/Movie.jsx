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

const OverviewContainer  = styled.div`
    background-color: rgba(0, 0, 0, 0.521);
    position:absolute;
    top: 0;
    display: none;
    flex-direction: column;
    padding: 10% 6%;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 2%;
    gap: 6%;
`;

const OverviewSt  = styled.div`
    color: white;
    height: 9.5em;
    overflow: hidden;
    line-height: 1.2;
    text-align: left;
    word-wrap: break-word;
    display:-webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
`;

const MovieContainer = styled.div`
    position:relative;
    cursor: pointer;
    width: 166.66px;
    &:hover ${OverviewContainer}{
        display: flex;
        cursor: pointer;
    }
`;

const MovieImage  = styled.img`
    width: 166.66px;
    height: 250px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`;

const InfoContainer  = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4% 6% 30%;
    height: 30px;
    gap: 3%;
    background-color: rgba(240, 248, 255, 0.167);
    border-bottom-left-radius: 4%;
    border-bottom-right-radius: 4%;
`;





function Movie({id, title, poster_path, vote_avg, release_date, overview}){
    const navigate = useNavigate();
    
    return(
        <MovieContainer  onClick={() => {navigate(`/movie/${id}`, {state: {id: id, title: title, poster_path: poster_path, vote_avg: vote_avg, release_date: release_date, overview: overview}})}}>
            <Poster><MovieImage
              alt="movieImage" 
              src= {`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
            <OverviewContainer>
                <Title>{title}</Title>
                <OverviewSt>{overview}</OverviewSt>
            </OverviewContainer>
            </Poster>
            <InfoContainer>
                <Title>{title}</Title>
                <Vote>{vote_avg}</Vote>
            </InfoContainer>
            
        </MovieContainer>
    )
}

export default Movie