import styled from "styled-components";

export const FirstContainer = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    border-radius: 40px;
    background-color: white;
    width : 50vw;
    height : 95vh;
    margin-top : 1vh;
    hr{
        margin-top: 12px;
        border : 0;
        border-top: 4px solid rgb(255, 255, 208);
    }
`;

export const TodayDateContainer = styled.div`
    margin-top: 20px;
    display : flex;
    align-items: center;
    justify-content: space-between;
`;

export const TodayDate = styled.div`
    margin-left: 20px;
    font-family: "Hi Melody", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size : 40px;
`;

export const TodayTime = styled.div`
    margin-right: 20px;
    font-family: "Hi Melody", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size : 40px;
`;

export const TodayDayOfWeek = styled.div`
    margin-left: 20px;
    margin-top: 12px;
    font-family: "Hi Melody", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size : 40px;
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
