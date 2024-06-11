import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import Movie from '../components/Movie'
import styled from 'styled-components'

const Pagecontainer = styled.div`
  display: flex;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const Backpage = styled.div`
  color: ${props=> props.pagecnt >1 ? 'white':'grey'};
  font-size: 1.3em;
  margin: 0 auto;
  margin-right: 50px;
  cursor: pointer;
`;
const Nextpage = styled.div`
  color: white;
  font-size: 1.3em;
  margin: 0 auto;
  margin-left: 50px;
  cursor: pointer;
`;
const PageCntSt = styled.div`
  color: white;
  font-size: 1.3em;
`;

function PopularPage() {
    const [Movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagecnt, setPagecnt] = useState(1);

    function add(){
      setPagecnt(pagecnt+1);
    }
    function sub(){
      if(pagecnt>1){
        setPagecnt(pagecnt -1);
      }
    }

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: {language: 'en-US', page: pagecnt},
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
      }, [pagecnt])

    
      return (
        <div>
        {loading ? <Loading/> :
            <div className="PosterContainer">{Movies.map(movie =>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_avg={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}/>
            )}
            </div>}
            <Pagecontainer>
              <Backpage onClick={sub} pagecnt={pagecnt}>{'<'}</Backpage>
              <PageCntSt>{pagecnt}</PageCntSt>
              <Nextpage onClick={add}>{'>'}</Nextpage>
            </Pagecontainer>
    </div>
    )
}
  
  export default PopularPage