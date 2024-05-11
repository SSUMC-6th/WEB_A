import styled from "styled-components";

export const StyledWrapper = styled.div`
    background-color:  #22264c;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  padding: 20px;
  color: white; 
  min-height: 90vh;
`;

export const Poster = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px; 
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 36px;
  margin-bottom: 10px;
`;

export const Star = styled.h3`
  text-align: left;
  font-size: 16px;
  margin-bottom: 5px;
  word-wrap: break-word;
  width: 600px;
`;
