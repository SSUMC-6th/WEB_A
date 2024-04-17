import React from 'react'
import { movies } from '../api.js'

function Poster() {
  return (
    <>
      <div className="container">
        {movies.results.map((movie) => (
          <div key={movie.id} className="movieContainer">
            <img className="movieImage" 
              alt="movieImage" 
              src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className="infoContainer">
              <div className="title">{movie.title}</div>
              <div className="vote">{movie.vote_average}</div>
            </div>
            <div className="overviewContainer">
                <div className="title">{movie.title}</div>
                <div className="overview">{movie.overview}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Poster
