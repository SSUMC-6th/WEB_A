import styled from "styled-components";

export const TodoUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 32px;
    padding: 0;
`;

export const TodoLi = styled.li`
    width : 50vw;
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    justify-content: space-between;
    align-items: center;
`;

export const TodoLeftWrap = styled.div`
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3vw;
`;

export const TodoCheck = styled.input`
    width: 28px;
    height: 28px;
`;

export const TodoDiv = styled.div`
    margin-left: 4px;
    font-family: "Hi Melody", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size : 24px;
`;

export const DelBtn = styled.button`
    margin-right: 3vw;
    border: 0;
    font-size : 24px;
    color: gray;
    background-color: white;
    cursor: pointer;
`;

