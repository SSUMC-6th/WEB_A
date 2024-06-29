import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const AlbumImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 8px;
`;

export const DetailContainer = styled.div`
  margin: 6px 0px;
`;

export const Title = styled.span`
    color: black;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
`;

export const Singer = styled.span`
    color: #999999;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
`;

export const Price = styled.div`
  color: #009900;
  font-size: 18px;
  margin-top: 6px;
`;

export const CountContainer = styled.div`
  text-align: center;
  margin-left: 12px;
`;

export const Amount = styled.div`
    color: black;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    font-style: normal;
`;

export const Icon = styled.button`
  width: 20px;
  color: #1abc54;
  background: none;
  border: none;
  cursor: pointer;
`;