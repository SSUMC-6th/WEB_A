import React from 'react'
import styled from 'styled-components'

const welcome = styled.div`
    background-color: black;
    color: white;
    width: 100%
    height: 50%;
`;

function MainPage() {
    return (
    <div>
        <welcome>환영합니다</welcome>
        <div>Find your movies!</div>
    </div>
    )
}
  
  export default MainPage