import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Poster,
  Star,
  StyledWrapper,
  Title,
  StyledCastList,
  StyledCastItem,
  StyledCastImage,
  StyledDetailsContainer,
  StyledCastContainer,
  StyledCast,
} from "./MovieDetail.style";

const NO_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

export const MovieDetail = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "d2cb276ab0ca7b65595d1e9a2fd4ea84";

    const fetchMovie = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );

        setMovie(movieResponse.data);
        setCast(creditsResponse.data.cast);
        setCrew(creditsResponse.data.crew);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError("영화를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movie_id]);

  const calculateStars = () => {
    const averageRating = movie.vote_average;
    const stars = Math.round(averageRating);
    if (stars > 0) {
      return Array(stars).fill("⭐").join("");
    }
    return "";
  };

  const director = crew.find((member) => member.job === "Director");

  return (
    <StyledWrapper>
      {isLoading ? (
        <p>데이터를 받아오는 중입니다.</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <StyledDetailsContainer>
            <Poster
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={`Movie Poster of ${movie.title}`}
            />
            <div>
              <Title>{movie.title}</Title>
              <Star>{`평점: ${calculateStars()}`}</Star>
              <Star>{`개봉일: ${movie.release_date}`}</Star>
              <Star>{`감독: ${director ? director.name : "정보 없음"}`}</Star>
              <Star>줄거리</Star>
              <Star>
                {movie.overview === ""
                  ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                  : movie.overview}
              </Star>
            </div>
          </StyledDetailsContainer>
          <StyledCastContainer>
            <StyledCast>출연진 및 제작진</StyledCast>
            <StyledCastList>
              {cast.map((member) => (
                <StyledCastItem key={member.cast_id}>
                  {member.profile_path ? (
                    <StyledCastImage
                      src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                      alt={member.name}
                    />
                  ) : (
                    <StyledCastImage src={NO_IMAGE_URL} alt="No Image" />
                  )}
                  <p>{member.name}</p>
                  <p>{member.known_for_department}</p>
                </StyledCastItem>
              ))}
              {crew.map((member) => (
                <StyledCastItem key={member.credit_id}>
                  {member.profile_path ? (
                    <StyledCastImage
                      src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                      alt={member.name}
                    />
                  ) : (
                    <StyledCastImage src={NO_IMAGE_URL} alt="No Image" />
                  )}
                  <p>{member.name}</p>
                  <p>{member.job}</p>
                </StyledCastItem>
              ))}
            </StyledCastList>
          </StyledCastContainer>
        </>
      )}
    </StyledWrapper>
  );
};
