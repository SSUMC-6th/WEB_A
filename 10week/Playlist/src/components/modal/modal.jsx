import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { clearCart } from "../../redux/cartSlice";
import {
  StyledOverlay,
  StyledModalContainer,
  StyledButtonContainer,
  StyledButton,
} from "./modal.style";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <StyledOverlay>
      <StyledModalContainer>
        <h3>담아두신 모든 음반을 삭제하시겠습니까?</h3>
        <StyledButtonContainer>
          <StyledButton
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            네
          </StyledButton>
          <StyledButton onClick={() => dispatch(closeModal())}>
            아니요
          </StyledButton>
        </StyledButtonContainer>
      </StyledModalContainer>
    </StyledOverlay>
  );
};

export default Modal;
