import React, { useState, useEffect } from 'react';
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function UpComing() {
  const [upComingMovies, setUpComingMovies] = useState([]);
  useEffect(() => {
    // TMDB API에서 현재 상영 중인 영화를 가져오는 함수
    const fetchUpComingMovies = async () => {
      try {
        // TMDB API 키
        const apiKey = '6ab52ed61e0614ca042f708924a3f486';
        const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

        // API 호출
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch upcoming movies');
        }
        
        // JSON 형태로 변환
        const data = await response.json();

        // 가져온 영화 데이터를 상태에 설정
        setUpComingMovies(data.results);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    fetchUpComingMovies();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

    return (
      <>
      <h1 className='now-page'>개봉 예정 영화</h1>
      <div className='app-container'>
        {upComingMovies.map(movie => (
          <div className='movie-info' key={movie.id}>
            {movie.poster_path && (
              <img src={IMG_BASE_URL + movie.poster_path} alt='영화포스터'/>
            )}
            <div className='movie-info-content'>
              <h4>{movie.title}</h4>
              <span>{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </div>
      </>
    )
  }
  
  export default UpComing
  