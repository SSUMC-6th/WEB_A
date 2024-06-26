import React, {useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {BounceLoader} from 'react-spinners'
import styled from 'styled-components'
import { fetchCartItems } from '../constants/fetchCartItems';
import {increase, decrease, removeItem, clearCart, calculateTotals} from '../redux/cartSlice'
import CartItem from './CartItem'


const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 40px;
`;
const CartContSt = styled.div`
`;

const ClearButton = styled.button`
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 20px;
    background-color: rgba(201, 186, 186);
    color: white;
    margin: 0 auto;
`;

const Spinner = styled.div`
    display: grid;
    place-items: center;
    margin-top: 150px;
`;

function CartContainer(){
    const { cartItems, status, error } = useSelector((state) => state.cart);
    const dispatch = useDispatch(); 

    useEffect(() => {
        console.log('Current status:', status);
        if (status === 'idle') {
          dispatch(fetchCartItems());
        }
        else if (status === 'suceeded') {
            dispatch(calculateTotals());
            console.log("안녕")
          }
        
      }, [status, cartItems]);

    if (status === 'loading') {
        return <Spinner><BounceLoader/></Spinner>;
      }
    else if (status === 'failed') {
        return <Title>당신이 선택한 음반</Title>;
      }
    return(
        <div>
        <Title>당신이 선택한 음반</Title>
        <CartContSt>
            {cartItems.map((cart)=> (
                    <CartItem 
                    key= {cart.id}
                    id= {cart.id}
                    title= {cart.title}
                    singer= {cart.singer}
                    price= {cart.price}
                    img= {cart.img}
                    amount= {cart.amount}
                    />
            ))}
        </CartContSt>
        <ClearButton onClick={()=>{dispatch(clearCart());}}>Clear</ClearButton>
        </div>

    )
}

export default CartContainer;