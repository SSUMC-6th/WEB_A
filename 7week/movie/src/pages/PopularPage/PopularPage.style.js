import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #22264c;
  padding-bottom: 30px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export const PaginationInfo = styled.div`
  margin: 0 15px;
  font-size: 18px;
  color: white;
`;
