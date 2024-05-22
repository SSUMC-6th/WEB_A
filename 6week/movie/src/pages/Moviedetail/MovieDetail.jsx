import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Poster, Star, StyledWrapper, Title } from "./MovieDetail.style";

export const MovieDetail = () => {
    const { movie_id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const API_KEY = "d2cb276ab0ca7b65595d1e9a2fd4ea84";
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
                    params: {
                        api_key: API_KEY,
                    }
                });
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [movie_id]);

    const calculateStars = () => {
        const averageRating = movie.vote_average; 
        const stars = Math.round(averageRating);
        if (stars > 0) {
            return Array(stars).fill('⭐').join('');
        }
        return ''; 
    };

    return (
        <StyledWrapper>
            <Poster
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`Movie Poster of ${movie.title}`}
            />
            <div>
                <Title>{movie.title}</Title>
                <Star>{`평점: ${calculateStars()}`}</Star>
                <Star>{`개봉일: ${movie.release_date}`}</Star>
                <Star>줄거리</Star>
                <Star>
                    {movie.overview === ""
                        ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                        : movie.overview}
                </Star>
            </div>
        </StyledWrapper>
    );
};
