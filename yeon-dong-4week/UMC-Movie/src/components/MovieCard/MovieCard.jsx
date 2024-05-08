import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { MovieContainer, MovieInfo, MovieInfoContent } from './MovieCard.style';
import { useNavigate } from "react-router-dom";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function MovieCard({urlType}) {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // TMDB API에서 현재 상영 중인 영화를 가져오는 함수
    const fetchMovies = async () => {
      try {
        // TMDB API 키
        const apiKey = '6ab52ed61e0614ca042f708924a3f486';
        const apiUrl = `https://api.themoviedb.org/3/movie/${urlType}?api_key=${apiKey}&language=en-US&page=1`;

        // API 호출
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        
        // JSON 형태로 변환
        const data = await response.json();

        // 가져온 영화 데이터를 상태에 설정
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    fetchMovies();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정

    return (
      <>
      {loading ? (<LoadingSpinner />) : (
      <MovieContainer>
        {movies.map(movie => (
          <MovieInfo key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            {movie.poster_path && (
              <img src={IMG_BASE_URL + movie.poster_path} alt='영화포스터'/>
            )}
            <MovieInfoContent>
              <h4>{movie.title}</h4>
              <span>{movie.vote_average}</span>
            </MovieInfoContent>
          </MovieInfo>
        ))}
      </MovieContainer>
      )}
      </>
    );
  }
  
  export default MovieCard
  