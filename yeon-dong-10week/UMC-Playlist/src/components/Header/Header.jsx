import { Container, HeaderText, Albums, Cart } from "./Header.style"
import { CartIcon } from "../../contents/icons";
import { useSelector } from "react-redux";

function Header() {
  const { totalAlbums } = useSelector((state) => state.cart);

  return (
    <>
      <Container>
        <HeaderText>UMC PlayList</HeaderText>
        <Albums>{totalAlbums}</Albums>
        <Cart>
          <CartIcon/>
        </Cart>
      </Container>
    </>
  )
}
  
  export default Header