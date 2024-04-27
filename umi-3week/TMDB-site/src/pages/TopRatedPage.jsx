import React from "react";
import { useState, useEffect } from "react";
import './Page.css'
import PosterItem from "../components/PosterItem";

function TopRatedPage(){
    const [movies, setMovies] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ0NDVkYTFkMDBkYTg5ZWQ4ZTAwMWI3YTgyODZlMCIsInN1YiI6IjY1YzFkZTIxOGU4ZDMwMDE2Mjc3ZDE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzdBlisLcPNQkSG7QN-39G7eW1rERKixo8VH5Ym3mwc'
        }
      };
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
    }, [])

    console.log(movies)
    return(
        <>
        <div className='container'>
        {movies && movies.map((movie) => (
            <PosterItem
            key={movie.id}
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

export default TopRatedPage;