import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 98.9vw;
    height: 10vh;
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #6666FF;
`;

export const HeaderText = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 36px;
    font-weight: 800;
    font-style: normal;
`;

export const Albums = styled.div`
    position: absolute;
    top: 2.8vh;
    right: 20.2vw;
    width: 24px;
    height: 18px;
    background-color: #33CC33;
    color: black;
    border-radius: 999px;
    text-align: center;
    padding-bottom: 4px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    font-weight: 900;
    font-style: normal;
`;

export const Cart = styled.div`
    padding-top: 8px;
    width: 40px;
    color: white;
`;
