// eslint-disable-next-line no-unused-vars
import React from "react";
import { PlayListItem } from "./PlayListItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, clearCart } from "../redux/cartSlice";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px 100px;
  height: fit-content;
  min-height: 100vh;
  background: linear-gradient(#272727, #111);
  background-repeat: no-repeat;
`;

const TItle = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px 0px;
  gap: 24px;
`;

const Divider = styled.div`
  width: 60vw;
  height: 1px;
  background-color: #444;
`;

const TotalContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 54px;
`;

const TotalsText = styled.div`
  color: white;
  font-size: 20px;
`;

const Totals = styled.div`
  color: #1abc54;
  font-size: 20px;
`;

const Reset = styled.button`
  background: none;
  border: 1px solid #888;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 4px;
`;

const PlayList = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  const onReset = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <Container>
        <TItle>당신이 선택한 음반</TItle>
        <PlayListContainer>
          {items.map((item) => (
            <PlayListItem key={item.key} item={item} />
          ))}
        </PlayListContainer>
        <Divider />
        <TotalContainer>
          <TotalsText>총 가격</TotalsText>
          <Totals>{totalAmount}원</Totals>
        </TotalContainer>
        <Reset onClick={onReset}>장바구니 초기화하기</Reset>
      </Container>
    </>
  );
};

export default PlayList;
