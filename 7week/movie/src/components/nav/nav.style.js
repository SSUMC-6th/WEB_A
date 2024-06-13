import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #22264c;
  height: 5vh;
  color: white;
`;

const NavItem = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledHome = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledSignUp = styled(NavItem)``;

export const StyledLogin = styled(NavItem)``;

export const StyledLogout = styled(NavItem)``;

export const StyledPopular = styled(NavItem)``;

export const StyledNowPlaying = styled(NavItem)``;

export const StyledTopRated = styled(NavItem)``;

export const StyledUpcoming = styled(NavItem)``;
