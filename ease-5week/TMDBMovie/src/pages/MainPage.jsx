import React, {useState} from 'react'
import styled from 'styled-components'
import searchIcon from '../assets/search.svg'
import Movie from '../components/Movie'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 60px;
`;

const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
`;

const FindContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: white;
    width: 100%;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
`;

const FindFormSt = styled.form`
    display: flex;
`;

const FindInputSt = styled.input`
    margin-top: 40px;
    padding-left: 15px;
    width: 500px;
    height: 40px;
    border-radius: 20px;
    border: 0;
`;
const FindButtonSt = styled.button`
    margin-top: 45px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    background-image: url(${searchIcon});
    background-size: cover; // 이미지를 버튼 크기에 맞게 조정
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;
const PosterContainer = styled.div`
    position: relative;
    top: 60px;
    display:${(props) => (props.isVisible ? 'grid' : 'none')};
    justify-content:center;
    grid-template-columns:repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 150px;
    padding: 40px;
    border-radius: 8px;
    background-color: rgba(0,0,0, 0.2);
    height: 500px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;  /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #217af4; /* 스크롤바의 색상 */
        
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
    }
`;

function MainPage() {
    const [findInput, setFindInput] = useState("");
    const [movies, setMovies] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleInputChange = (event) => {
        setFindInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZThjODFlNjJkODliOTZjNDMwZDZmNWYwZGMxMWVjNyIsInN1YiI6IjY2MzFjOGZiMmEwOWJjMDEyNjU4MjZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuNpaO61da4Wqx285BQZNBwxldsyVjM87-73ah1XkFo'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${findInput}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovies(response.results);
                setIsVisible(true);})
            .catch(err => console.error(err));
    }

    return (
    <Main>    
        <Welcome>
            <div>환영합니다</div>
        </Welcome>
        <FindContainer>
            <div>Find your movies !</div>
            <FindFormSt onSubmit={handleSubmit}>
                <FindInputSt type="text" onChange={handleInputChange} value={findInput}/>
                <FindButtonSt type="submit"/>
            </FindFormSt>
        </FindContainer>
        <PosterContainer isVisible={isVisible}>{movies.map(movie =>
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_avg={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}/>
            )}
            </PosterContainer>
    </Main>

    )
}
  
  export default MainPage