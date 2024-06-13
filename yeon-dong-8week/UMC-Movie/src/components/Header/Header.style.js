import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    background-color: rgb(0, 0, 88);
`;

export const HeaderWrap = styled.div`
    height: 64px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 700px) {
        margin-left: 20px;
    }
`;

export const HeaderLeftWrap = styled.div`
    display: flex;
    a {
        color: white;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
    }
`;

export const HeaderRightWrap = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-left: 12px;
            margin-right: 12px;
        }
    }
    @media (max-width: 700px) {
        display: none;
    }
`;

export const HeaderNavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: font-size 0.5s;

    &:hover {
        font-size: 20px;
        color: rgb(218, 207, 0);
    }
`;

export const MobileNavBar = styled.div`
    display: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right:20px;
    span {
        background-color: white;
        height: 3px;
        width: 100%;
        margin: 2px 0;
        transition: all 0.4s;
    }

    @media (max-width: 700px) {
        display: flex;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: rgb(0, 0, 88);
    position: absolute;
    top: 64px;
    right: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    @media (max-width: 700px) {
        display: ${(props) => (props.open ? "flex" : "none")};
    }

    a {
        color: white;
        text-decoration: none;
        padding: 15px 0;
        font-weight: 600;
        width: 100%;
        text-align: center;
        border-top: 1px solid white;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`;
