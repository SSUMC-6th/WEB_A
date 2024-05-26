import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #22264c;
  color: white;
  width: 100%;
  min-height: 95vh;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 40%;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export const LoginLink = styled.div`
  color: white;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
`;

export const StyledButton = styled.button`
  background-color: ${(props) => (props.canSubmit ? "lightblue" : "#ccc")};
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
`;
