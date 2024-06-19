import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "../../redux/cartSlice";
import { openModal } from "../../redux/modalSlice";
import AlbumItem from "../album/albumItem";
import {
  StyledButton,
  StyledContainer,
  StyledList,
  StyledSummary,
  StyledTitle,
  StyledTotal,
} from "./albumList.style";
import Modal from "../modal/modal";

const AlbumList = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  return (
    <StyledContainer>
      <StyledTitle>당신이 선택한 음반</StyledTitle>
      <StyledList>
        {items.map((item) => (
          <AlbumItem key={item.id} item={item} />
        ))}
      </StyledList>
      <StyledSummary>
        <StyledTotal>총 가격: ₩ {totalPrice}</StyledTotal>
      </StyledSummary>
      <StyledButton onClick={() => dispatch(openModal())}>
        장바구니 초기화
      </StyledButton>
      <Modal />
    </StyledContainer>
  );
};

export default AlbumList;
