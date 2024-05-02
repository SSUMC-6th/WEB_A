import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  margin: 10px;
  background-color: #22264c;
  padding: 10px;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  word-break: break-all;
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  width: 200px;
  height: auto;
`;

export const Title = styled.h3`
  text-align: left;
  color: white;
  font-size: 16px;
  margin-left: 4%;
`;

export const Star = styled.h3`
  text-align: right;
  color: white;
  font-size: 16px;
  margin-right: 5%;
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
`;
