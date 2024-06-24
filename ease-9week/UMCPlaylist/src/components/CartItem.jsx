import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {ChevronDown, ChevronUp} from '../constants/icons'
import styled from 'styled-components'
import {increase, decrease, removeItem, clearCart, calculateTotals} from '../redux/cartSlice'

const MusicContainer = styled.div`
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 80%;
    margin-bottom: 20px;
    padding: 15px 30px;
    border-radius: 15px;
    background-color: rgba(20, 0, 0, 0.25);
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
`;
const Img = styled.img`
    width: 80px;
    border-radius: 15px;
`;
const Info = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const InfoTitle = styled.div`

`;
const Price = styled.div`

`;
const AmountContainer = styled.div`
    position: absolute;
    right: 30px;
    top: 23px;
`;
const AmountSt = styled.div`

`;
const Icons = styled.div`
    border: none;
`;

function CartItem({id, title, singer, price, img, amount}){
    const dispatch = useDispatch();

    const handleUpCnt = ()=> {
        dispatch(increase(id));
    }
    const handleDownCnt = ()=> {
        if(amount <= 1){
            dispatch(decrease(id));
            dispatch(removeItem(id));
        }
        else{
            dispatch(decrease(id));
        }
    }

    

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
                <Icons onClick={handleUpCnt}>
                <ChevronUp/>
                </Icons>
                <AmountSt>{amount}</AmountSt>
                <Icons onClick={handleDownCnt}>
                <ChevronDown/>
                </Icons>
            </AmountContainer>
        </MusicContainer>
        
    )
}

export default CartItem;