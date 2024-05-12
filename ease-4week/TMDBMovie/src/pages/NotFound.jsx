import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Error = styled.div`
    margin-top: 50px;
    color: red;
`;
const ToMain = styled.button`
    background-color: transparent;
    border: none;
`;

function NotFound(){
    const navigate = useNavigate();

    return(
        <div>
            <Error>
                404 Error
            </Error>
            <ToMain onClick={()=> navigate("/")}>
                메인으로 돌아가기
            </ToMain>
        </div>
        
    )
}

export default NotFound