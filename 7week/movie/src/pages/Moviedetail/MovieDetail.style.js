import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: #22264c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Poster = styled.img`
  margin-top: 100px;
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

export const Title = styled.h1`
  text-align: left;
  margin-top: 100px;
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

export const StyledCast = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const StyledCastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const StyledCastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100px;
  text-align: center;
`;

export const StyledCastImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
`;
