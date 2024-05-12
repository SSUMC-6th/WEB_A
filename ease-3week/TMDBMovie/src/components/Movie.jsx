import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    color: white;
    `;

const Poster = styled.div`
`;

const Vote = styled.div`
    color: white;
`;

function Movie({title, poster_path, vote_avg}){
    return(
        <div className="MovieContainer">
            <Poster><img className="movieImage" 
              alt="movieImage" 
              src= {`https://image.tmdb.org/t/p/w500/${poster_path}`}
            /></Poster>
            <div className="infoContainer">
                <Title>{title}</Title>
                <Vote>{vote_avg}</Vote>
            </div>
            
        </div>
    )
}

export default Movie