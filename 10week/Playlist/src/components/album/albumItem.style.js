import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f0f4f8;
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const StyledTitle = styled.h3`
  margin: 0;
  font-size: 1.1em;
`;

export const StyledSinger = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
  color: #555;
`;

export const StyledPrice = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #333;
`;

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  svg {
    cursor: pointer;
  }
`;

export const StyledIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 10px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
