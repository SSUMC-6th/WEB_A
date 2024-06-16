import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart, calculateTotals } from "../../redux/cartSlice";
import AlbumItem from "../album/albumItem";
import {
  StyledButton,
  StyledContainer,
  StyledList,
  StyledSummary,
  StyledTitle,
  StyledTotal,
} from "./albumList.style";

const AlbumList = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
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
        <StyledTotal>총 수량: {totalQuantity}</StyledTotal>
        <StyledTotal>총 가격: ₩ {totalPrice}</StyledTotal>
      </StyledSummary>
      <StyledButton onClick={() => dispatch(clearCart())}>
        장바구니 초기화
      </StyledButton>
    </StyledContainer>
  );
};

export default AlbumList;
