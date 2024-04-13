import React from 'react'
import './App.css'
import PosterItem from './components/PosterItem'
import { movies } from './movies'

function App() {
  return (
    <>
    <div className='container'>
      {movies.results.map((movie) => (
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
  )
}

export default App
