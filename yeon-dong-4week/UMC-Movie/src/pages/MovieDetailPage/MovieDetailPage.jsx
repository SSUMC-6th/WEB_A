import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function MovieDetailPage() {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '6ab52ed61e0614ca042f708924a3f486';
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`;

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
      console.log(movies);
    };
    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    fetchMovies();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정
  
    return (
      <>
        {loading ? (<LoadingSpinner />) : ( <div>안녕</div> )}
      </>
    )
  }
  
  export default MovieDetailPage
  