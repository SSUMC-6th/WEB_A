// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "../constants/icon";
import { decrease, increase } from "../redux/cartSlice";

const ItemContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AlbumImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 8px;
`;

const DetailContainer = styled.div`
  margin: 6px 0px;
`;

const Title = styled.span`
  color: white;
  font-size: 18px;
`;

const Singer = styled.span`
  color: #a7a7a7;
  font-size: 18px;
`;

const Price = styled.div`
  color: #1abc54;
  font-size: 18px;
  margin-top: 6px;
`;

const CountContainer = styled.div`
  text-align: center;
  margin-left: 12px;
`;

const Amount = styled.div`
  color: white;
`;

const Icon = styled.button`
  width: 20px;
  color: #1abc54;
  background: none;
  border: none;
`;

// eslint-disable-next-line react/prop-types
export const PlayListItem = ({ item }) => {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase(item.id));
  };

  const onDecrease = () => {
    dispatch(decrease(item.id));
  };

  return (
    <>
      <ItemContainer>
        <InfoContainer>
          <AlbumImage img={item.img} />
          <DetailContainer>
            <Title>{item.title}</Title>
            <Singer> • {item.singer}</Singer>
            <Price>{item.price}원</Price>
          </DetailContainer>
        </InfoContainer>
        <CountContainer>
          <Icon onClick={onIncrease}>
            <ChevronUp />
          </Icon>
          <Amount>{item.amount}</Amount>
          <Icon onClick={onDecrease}>
            <ChevronDown width="24px" />
          </Icon>
        </CountContainer>
      </ItemContainer>
    </>
  );
};
