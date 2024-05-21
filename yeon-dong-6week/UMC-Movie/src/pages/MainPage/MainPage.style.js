import styled from "styled-components";

export const StyledMainPage = styled.div`
    margin-top: 10%;
    color: white;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
`;

export const SearchContainer = styled.div`
    margin-top: 5%;
    color: white;
    font-size: 60px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 30%;
    height: 6vh;
    background-color: white;
    border-radius: 20px;
    padding-left: 24px;
`;

export const SearchButton = styled.button`
  width: 44px;
  height: 44px;
  background-color: yellow;
  border-radius: 999px;
  margin-left: 16px;
`;

export const MovieContainer = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #1C98A6;
    width: 80vw;
    border-radius: 20px;
`;

export const MovieInfo = styled.div`
    width: 250px;
    margin: 16px;
    background-color: #005C53;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    img {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    cursor:pointer;

`;

export const MovieInfoContent = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;

    h4 {
        margin: 0;
    }
    
    span {
        margin-left: 3px;
    }
`;

export const StyledMovieContainer = styled.div`
    margin-top: 20px;
`;

export const StyledLodingText = styled.p`
    margin-top: 64px;
    color: tomato;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
`;