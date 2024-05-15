import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
    background-color: rgb(0, 0, 88);
`;

export const HeaderWrap = styled.div`
    height: 64px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between
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

        li{
            margin-left: 12px;
            margin-right: 12px;
        }
    }
`;

export const HeaderNavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: font-size 0.5s;

    &:hover{
        font-size: 20px;
        color: rgb(218, 207, 0);
    }
`;

export const SignUpButton = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: font-size 0.5s;

    &:hover{
        font-size: 20px;
        color: rgb(218, 207, 0);
    }

    cursor:pointer;
`;
