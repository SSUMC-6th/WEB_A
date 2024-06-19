import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {ChevronDown, ChevronUp} from '../constants/icons'
import styled from 'styled-components'

const MusicContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
`;
const Img = styled.img`
    width: 80px;
`;
const Info = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`;
const InfoTitle = styled.div`

`;
const Price = styled.div`

`;
const AmountContainer = styled.div`

`;
const AmountSt = styled.div`

`;


function CartItem({id, title, singer, price, img, amount}){
    const dispatch = useDispatch();

    return (
        <MusicContainer>
            <Img alt="musicImage" src={img}></Img>
            <Info>
                <InfoTitle>
                    {title} | {singer}
                </InfoTitle>
                <Price>{price}</Price>
            </Info>
            <AmountContainer>
                <ChevronUp onClick={()=> dispatch(increase(id))}/>
                <AmountSt>{amount}</AmountSt>
                <ChevronDown onClick={()=> dispatch(decrease(id))}/>
            </AmountContainer>
        </MusicContainer>
        
    )
}

export default CartItem;