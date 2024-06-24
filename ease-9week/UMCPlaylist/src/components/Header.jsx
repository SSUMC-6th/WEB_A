import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {CartIcon} from '../constants/icons'

const HeaderSt = styled.div`
    background-color: rgba(201, 155, 155);
    margin: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`
    color: white;
    text-align: center;
    margin-left: 20px;
    font-weight: bold;
`;

const CartIconSt = styled.div`
    margin-right: 60px;
`;

const TotalSt = styled.div`
    position: absolute;
    top: 4px;
    right: 50px;
    font-size: 13px;
    color: yellow;
    font-weight: bold;
`;

function Header(){
    const cartlist = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <HeaderSt>
            <Title>UMC PlayList</Title>
            <CartIconSt><CartIcon/></CartIconSt>
            <TotalSt>{cartlist.total}</TotalSt>
        </HeaderSt>
    )
}

export default Header;