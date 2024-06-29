import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContainer = styled.div`
  background: white;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;
