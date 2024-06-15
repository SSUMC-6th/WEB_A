import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #22264c;
  height: 5vh;
  color: white;
  padding: 0 10px;

  .desktop-nav {
    display: none;
  }

  @media (min-width: 769px) {
    .desktop-nav {
      display: flex;
      align-items: center;
    }
  }
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

export const StyledSignUp = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledLogin = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledLogout = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledPopular = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledNowPlaying = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledTopRated = styled(NavItem)`
  margin-left: 10px;
`;

export const StyledUpcoming = styled(NavItem)`
  margin-left: 10px;
`;

export const MenuIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
