import styled from "styled-components";

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const MovieInfo = styled.div`
    width: 250px;
    margin: 16px;
    background-color: #005C53;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    img {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    cursor:pointer;

`;

export const MovieInfoContent = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;

    h4 {
        margin: 0;
    }
    
    span {
        margin-left: 3px;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 10px 30px 10px;
`;

export const PaginationText = styled.div`
    color: white;
    font-size: 20px;
`;

export const PaginationBtn = styled.button`
    margin-right: 20px;
    margin-left: 20px;
    color: white;
    background-color: ${props => props.$disable ? 'grey' : 'black' };
`;