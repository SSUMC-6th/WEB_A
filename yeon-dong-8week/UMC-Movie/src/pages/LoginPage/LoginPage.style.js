import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValidationText = styled.div`
    margin-top: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const StyledInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border-radius: 20px;
    width: 40%;
    @media (max-width: 700px) {
      width: 70%;
    }
`;

export const StyledError = styled.div`
    color: ${props => props.$errMsg ? 'red' : 'rgba(0,0,0,0)' };
`;

export const StyledButton = styled.button`
  background-color: ${props => props.$canSubmit ? 'navy' : 'gray'};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  width: 42%;
  font-size: 16px;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;