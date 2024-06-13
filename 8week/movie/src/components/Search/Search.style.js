import styled from "styled-components";

export const StyleSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #22264c;
  text-align: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  min-height: 70vh;

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

export const StyleTitle = styled.h1``;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const StyledSearchView = styled.div`
  background-color: lightgray;
  border-radius: 20px;
  width: 100%;
  max-width: 1000px;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Center = styled.div`
  display: flex;
  background-color: #22264c;
  padding: 10px;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  word-break: break-all;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const Poster = styled.img`
  border-radius: 5px;
  width: 200px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const Title = styled.h3`
  text-align: left;
  max-width: 200px;
  color: white;
  font-size: 16px;
  margin-left: 4%;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 0;
  }
`;

export const Star = styled.h3`
  text-align: right;
  color: white;
  font-size: 16px;
  margin-right: 5%;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 0;
  }
`;

export const Overview = styled.div.attrs({
  className: "overview",
})`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
`;

export const MovieWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  &:hover ${Overview} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const StyledMovieCard = styled.div`
  background-color: #22264c;
  border-radius: 5px;
  position: relative;
  margin-right: 10px;
  max-height: 500px;
  &:hover ${Overview} {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-right: 5px;
    max-height: auto;
  }
`;
