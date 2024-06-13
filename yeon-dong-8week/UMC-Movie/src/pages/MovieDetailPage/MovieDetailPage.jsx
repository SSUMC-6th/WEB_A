import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Background, Blur, Container, OverviewContainer, Title, InfoContainer, Text, Box, Overview, StyledCreditText } from "./MovieDetailPage.style";

function MovieDetailPage() {
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '6ab52ed61e0614ca042f708924a3f486';
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`;
        const apiUrl2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US&page=1`;

        // API 호출
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        
        // JSON 형태로 변환
        const data = await response.json();
        // 가져온 영화 데이터를 상태에 설정
        setMovies(data); // 다음 렌더링에 나타나게 하겠다. useEffect가 끝나야지 차있다.
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    fetchMovies();
  }, []); // 빈 배열을 전달하여 한 번만 호출되도록 설정
  
  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const apiKey = '6ab52ed61e0614ca042f708924a3f486';
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US&page=1`;

        // API 호출
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        
        // JSON 형태로 변환
        const data = await response.json();
        // 가져온 영화 데이터를 상태에 설정
        setCredits(data); // 다음 렌더링에 나타나게 하겠다. useEffect가 끝나야지 차있다.
        setLoading(false);
      } catch (error) {
        console.error('Error fetching credits:', error);
      } 
    };
    // 페이지가 로드될 때 영화 데이터를 가져오도록 호출
    fetchCredits();
  }, []);

  const starCount = () => {
    const star = [];
    for (let i = 0; i < Math.floor(movies.vote_average); i++) {
      star.push("⭐️ ");
    }
    return star;
  };

  const directer = (crew) => {
    for (let i = 0; i < crew.length; i++){
      if(crew[i].job == "Director"){return [crew[i].original_name, crew[i].profile_path];}
    }
    return "No information";
  }

    return (
      <>
        {loading ? (<LoadingSpinner />) : ( 
        <>
        <Background image={`https://image.tmdb.org/t/p/w200${movies.backdrop_path}`} >
        <Blur>
          <Container>
              <img
                src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                width="300px"
                height="440px"
              />
            <OverviewContainer>
              <Title>{movies.title}</Title>
              <InfoContainer>
                <Text>평점</Text>
                <Box>{starCount()}</Box>
              </InfoContainer>
              <InfoContainer>
                <Text>개봉일</Text>
                <Box>{movies.release_date}</Box>
              </InfoContainer>
              <Box>
                <Text>줄거리</Text>
                <Overview>
                  {movies.overview == ""
                    ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                    : movies.overview}
                </Overview>
                <br/>
                <Text>감독</Text>
                {directer(credits.crew)[1] ? <img src={`https://image.tmdb.org/t/p/w200${directer(credits.crew)[1]}`}
                width="40px"
                height="50px"/> : 
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"}
                width="40px"
                height="50px"/>}
                <Overview>{directer(credits.crew)[0]}</Overview>
                <br/>
                <Text>출연진</Text>
                <>{credits.cast.map( credit => <StyledCreditText key={credit.id}>{credit.original_name}, </StyledCreditText> )}</>
              </Box>
            </OverviewContainer>
          </Container>
        </Blur>
        </Background>
      </> 
        )}
      </>
    )
  }
  
  export default MovieDetailPage
  