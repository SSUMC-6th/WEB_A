import { useSelector } from "react-redux";
import { CartIcon } from "../../constants/icons";
import {
  StyledHeader,
  StyledTitle,
  StyledCart,
  StyledCartCount,
} from "./head.style";

const Head = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <StyledHeader>
      <StyledTitle>UMC Playlist</StyledTitle>
      <StyledCart>
        <CartIcon />
        <StyledCartCount>{totalQuantity}</StyledCartCount>
      </StyledCart>
    </StyledHeader>
  );
};

export default Head;
