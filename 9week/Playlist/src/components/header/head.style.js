import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #4a90e2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: white;
`;

export const StyledCart = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-right: 5%;
  svg {
    width: 15%;
    height: 15%;
  }
`;

export const StyledCartCount = styled.span`
  background-color: red;

  border-radius: 50%;
  color: white;
  padding: 5px 10px;
  font-size: 1rem;
  position: absolute;
  top: -10px;
  right: -10px;
`;
