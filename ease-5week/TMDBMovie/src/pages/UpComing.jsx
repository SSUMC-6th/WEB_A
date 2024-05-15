import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import Movie from '../components/Movie'

function UpComing() {
    const [Movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZThjODFlNjJkODliOTZjNDMwZDZmNWYwZGMxMWVjNyIsInN1YiI6IjY2MzFjOGZiMmEwOWJjMDEyNjU4MjZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuNpaO61da4Wqx285BQZNBwxldsyVjM87-73ah1XkFo'
        }
      };
      
      useEffect(()=>{
        setLoading(true);
        axios
        .request(options)
        .then(function (response) {
        console.log(response.data);
        setMovies(response.data.results);
        setLoading(false);
        })
        .catch(function (error) {
        console.error(error);
        setLoading(false);
        });
      }, [])
    
    return (
        <div>
        {loading ? <Loading/> :
            <div className="PosterContainer">{Movies.map(movie =>
            <Movie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_avg={movie.vote_average}
            release_date={movie.release_date}
            overview={movie.overview}/>
            )}
            </div>}
    </div>
    )
}
  
  export default UpComing


