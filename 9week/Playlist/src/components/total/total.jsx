import { useSelector } from "react-redux";
import { StyledSummary, StyledTotalText } from "./total.style";

export const Total = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <StyledSummary>
      <StyledTotalText>총 수량: {totalQuantity}</StyledTotalText>
      <StyledTotalText>총 가격: ₩ {totalPrice.toFixed(2)}</StyledTotalText>
    </StyledSummary>
  );
};
