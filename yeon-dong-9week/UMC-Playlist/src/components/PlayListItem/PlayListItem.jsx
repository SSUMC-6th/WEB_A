import { ItemContainer, InfoContainer, AlbumImage, DetailContainer, Title, Singer, Price, Icon, Amount, CountContainer } from "./PlayListItem.style";
import { ChevronUp, ChevronDown } from "../../contents/icons";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../redux/cartSlice";

function PlayListItem({ item }){
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

export default PlayListItem