import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/cartSlice";
import { ChevronUp, ChevronDown } from "../../constants/icons";
import {
  StyledImage,
  StyledInfo,
  StyledItem,
  StyledPrice,
  StyledQuantity,
  StyledSinger,
  StyledTitle,
  StyledIconWrapper,
} from "./albumItem.style";

const AlbumItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <StyledImage src={item.img} alt={item.title} />
      <StyledInfo>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledSinger>{item.singer}</StyledSinger>
        <StyledPrice>₩ {item.price}</StyledPrice>
        <StyledQuantity>
          <StyledIconWrapper
            onClick={() => {
              dispatch(increment(item.id));
            }}
          >
            <ChevronUp />
          </StyledIconWrapper>
          {item.amount}
          <StyledIconWrapper
            onClick={() => {
              dispatch(decrement(item.id));
            }}
          >
            <ChevronDown />
          </StyledIconWrapper>
        </StyledQuantity>
      </StyledInfo>
    </StyledItem>
  );
};

export default AlbumItem;

AlbumItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
