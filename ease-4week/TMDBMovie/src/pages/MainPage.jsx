import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 60px;
    text-align: center;
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

const Find = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: white;
    width: 100%;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
`;

function MainPage() {
    return (
    <Main>    
        <Welcome>
            <div>환영합니다</div>
        </Welcome>
        <Find>
            <div>Find your movies !</div>
        </Find>
    </Main>

    )
}
  
  export default MainPage