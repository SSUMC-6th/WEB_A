import { Container, TitleText, PlayListContainer, Divider, TotalContainer, TotalsText, Totals, Reset } from "./PlayList.style";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, clearCart, fetchCartItems } from "../../redux/cartSlice";
import { useEffect } from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import { open, close } from "../../redux/modalSlice";
import { Modal, Spin } from 'antd';

function PlayList() {
    const { items, status, error, totalAmount } = useSelector((state) => state.cart);
    const { modalOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCartItems());
    }, [dispatch]);

    useEffect(() => {
      if (status === 'succeeded') {
          dispatch(calculateTotals());
      }
  }, [items, status, dispatch]);

    const onReset = () => {
        dispatch(clearCart());
        dispatch(close());
    };

    const showModal = () => {
        dispatch(open());
      };

    const hideModal = () => {
        dispatch(close());
    };
  
    if (status === 'loading') {
      return (
          <Container>
              <TitleText>Loading...</TitleText>
              <br/><br/><br/><br/>
              <Spin />
          </Container>
      );
  }

  if (status === 'failed') {
      return (
          <Container>
              <TitleText>Error: {error}</TitleText>
          </Container>
      );
  }

    return (
      <>
        <Container>
            <TitleText>당신이 선택한 음반</TitleText>
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
            <Reset onClick={showModal}>장바구니 초기화하기</Reset>
            <Modal
                title="정말로 장바구니를 초기화 하시겠습니까?"
                open={modalOpen}
                onOk={onReset}
                onCancel={hideModal}
                okText="네"
                cancelText="아니오"
            >
                <p>장바구니 안에 담아놓은 모든 앨범이 삭제됩니다.</p>
            </Modal>
        </Container>
      </>
    )
  }
    
    export default PlayList