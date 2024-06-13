import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { debounce } from 'lodash'
import searchIcon from '../assets/search.svg'
import Movie from '../components/Movie'
import useStore from "../components/Store"

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
    @media(max-width: 400px){
        font-size: 15px;
    }
`;

const FindContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: white;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
    
`;

const FindFormSt = styled.div`
    display: flex;
`;

const FindInputSt = styled.input`
    margin-top: 40px;
    padding-left: 15px;
    width: 500px;
    height: 40px;
    border-radius: 20px;
    border: 0;
    @media (max-width: 760px){
    width: 65vw;
    }
    @media (max-width: 300px){
    width: 195px;
    }
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
    grid-gap: 30px;
    place-items: center;
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

const Loading = styled.div`
    position: relative;
    top: 60px;
    color: white;
    background-color: rgba(0,0,0, 0.2);
    width: 60%;
    height: 500px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 40px;
`;


function MainPage() {
    const [findInput, setFindInput] = useState("");
    const [movies, setMovies] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const {isLogined, user, setUser} = useStore(state => state);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        const fetchData = async () => {
            try{
            const response = await fetch('http://localhost:8080/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const responseData = await response.json();
            if(response.status==200){
                setUser(responseData.username);
                console.log(responseData);
            } else if(response.status==404){
                alert(responseData.message);
            }
        } catch (error) {
            console.error('유저 정보 로딩 중 에러 발생:', error);
            alert('유저 정보 로딩 과정에서 오류가 발생했습니다.');
        }};
        fetchData();
    }, [])

    const handleInputChange = (event) => {
        setFindInput(event.target.value);
    };

    const loadMovies = useCallback(debounce((findInput)=>{
        if (findInput) {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZThjODFlNjJkODliOTZjNDMwZDZmNWYwZGMxMWVjNyIsInN1YiI6IjY2MzFjOGZiMmEwOWJjMDEyNjU4MjZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuNpaO61da4Wqx285BQZNBwxldsyVjM87-73ah1XkFo'
                }
            };
            setLoading(true);
            fetch(`https://api.themoviedb.org/3/search/movie?query=${findInput}&include_adult=false&language=en-US&page=1`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setMovies(response.results);
                    setIsVisible(true);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false)});
        }
    }, 500), []);
    
    useEffect(() => {
        loadMovies(findInput);
    }, [findInput]); // findInput이 변경될 때마다 useEffect 실행


    return (
    <Main>    
        <Welcome>
            <div>{isLogined===true? `${user}님 환영합니다` : '환영합니다'}</div>
        </Welcome>
        <FindContainer>
            <div>Find your movies !</div>
            <FindFormSt>
                <FindInputSt type="text" onChange={handleInputChange} value={findInput}/>
                <FindButtonSt type="button"/>
            </FindFormSt>
        </FindContainer>
        {loading ? <Loading>데이터를 받아오는 중입니다.</Loading>:
        <PosterContainer isVisible={isVisible}>{movies.map(movie =>
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_avg={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}/>
            )}
            </PosterContainer>}
    </Main>
    )
}

export default MainPage;
