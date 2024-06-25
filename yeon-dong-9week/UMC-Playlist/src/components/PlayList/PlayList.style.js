import styled from "styled-components";

export const Container = styled.div`
    margin-top: 16vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleText = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 36px;
`;

export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0px;
  gap: 24px;
`;

export const Divider = styled.div`
  width: 60vw;
  height: 1px;
  background-color: #444;
`;

export const TotalContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 54px;
`;

export const TotalsText = styled.div`
    color: black;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 20px;
`;

export const Totals = styled.div`
    color: #009900;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 20px;
`;

export const Reset = styled.button`
    background: none;
    border: 2px solid black;
    color: black;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: 4px;
    cursor: pointer;
`;
