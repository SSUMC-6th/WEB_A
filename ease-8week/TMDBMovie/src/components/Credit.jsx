import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CreditContainer = styled.div`
    background-image: linear-gradient(to bottom, rgb(0, 0, 0),  rgb(2, 45, 84))
`;

const Title = styled.h3`
    text-align: center;
    color: white;
    margin-bottom: 30px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(80px, 1fr));
    grid-gap: 90px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
`;
const CrewSt = styled.div`
    color: white;
`;
const CrewImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover; 
    border-radius: 100%;
`;
const CrewDetail = styled.div`
    display: flex;
    flex-direction: column; 
    white-space: nowrap;
    align-items: center;
    gap: 10px;
`;
const Content = styled.div`
    @media(max-width: 400px){
    font-size: 13px;}
`;

function Credit(id){
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id.id}/credits`,
    params: {language: 'en-US'},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZThjODFlNjJkODliOTZjNDMwZDZmNWYwZGMxMWVjNyIsInN1YiI6IjY2MzFjOGZiMmEwOWJjMDEyNjU4MjZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuNpaO61da4Wqx285BQZNBwxldsyVjM87-73ah1XkFo'
    }
    };

    useEffect(()=>{
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setCast(response.data.cast);
            setCrew(response.data.crew);
        })
        .catch(function (error) {
            console.error(error);
        });
    }, [])

    return(
        <CreditContainer>
        <Title>출연진 및 제작진</Title>
        <GridContainer>
            {cast.map(cast=>
            <CrewSt key={cast.credit_id}>
                <CrewImage src={cast.profile_path === null ? 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s?' 
                :`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
                <CrewDetail>
                    <Content>{cast.name}</Content>
                    <Content>{cast.known_for_department}</Content>
                </CrewDetail>
            </CrewSt>)}
            {crew.map(crew=>
                <CrewSt key={crew.credit_id}>
                    <CrewImage src={crew.profile_path === null ? 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s?' 
                :`https://image.tmdb.org/t/p/w500/${crew.profile_path}`}/>
                    <CrewDetail>
                        <Content>{crew.name}</Content>
                        <Content>{crew.known_for_department}</Content>
                    </CrewDetail>
                </CrewSt>)}
        </GridContainer>
        </CreditContainer>
    )
}

export default Credit;