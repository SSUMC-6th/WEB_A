import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 120vh;
  position: absolute;
  background-image: linear-gradient(rgba(40, 43, 49, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.image});
  background-size: cover;
  left: 50%;
  transform: translate(-50%);
`;

export const Blur = styled.div`
  width: 100vw;
  height: 120vh;
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  display: flex;
  width: fit-content;
  text-align: center;
  transform: translate(50%, 45%);
  color: white;
  img {
    border-radius: 8px;
  }
`;

export const OverviewContainer = styled.div`
  width: 400px;
  text-align: left;
  margin-left: 60px;
  margin-top: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  overflow: hidden;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Text = styled.div`
  color: white;
  margin-right: 12px;
`;

export const Box = styled.div``;

export const StyledCreditText = styled.div`
  display: inline;
`;
