import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {CartIcon} from '../constants/icons'

const HeaderSt = styled.div`
    background-color: #957159;
    margin: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Title = styled.div`
    color: white;
    text-align: center;
    margin-left: 20px;
    font-weight: bold;
`;

const CartIconSt = styled.div`
    margin-right: 10px;
`;

function Header(){

    return (
        <HeaderSt>
            <Title>UMC PlayList</Title>
            <CartIconSt><CartIcon/></CartIconSt>
        </HeaderSt>
    )
}

export default Header;