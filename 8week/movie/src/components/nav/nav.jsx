import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/UserData/UsetData";
import {
  StyledNav,
  StyledSignUp,
  StyledLogin,
  StyledLogout,
  StyledPopular,
  StyledNowPlaying,
  StyledTopRated,
  StyledUpcoming,
  StyledHome,
  MenuIcon,
} from "./nav.style";
import { Sidebar } from "./slider";

export const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleNavigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <StyledNav>
        <StyledHome onClick={() => handleNavigate("/")}>UMC Movie</StyledHome>
        <MenuIcon onClick={toggleSidebar}>☰</MenuIcon>
        <div className="desktop-nav">
          {user ? (
            <StyledLogout onClick={handleLogout}>로그아웃</StyledLogout>
          ) : (
            <>
              <StyledSignUp onClick={() => handleNavigate("/signup")}>
                회원가입
              </StyledSignUp>
              <StyledLogin onClick={() => handleNavigate("/login")}>
                로그인
              </StyledLogin>
            </>
          )}
          <StyledPopular onClick={() => handleNavigate("/popular")}>
            Popular
          </StyledPopular>
          <StyledNowPlaying onClick={() => handleNavigate("/now-playing")}>
            Now Playing
          </StyledNowPlaying>
          <StyledTopRated onClick={() => handleNavigate("/top-rated")}>
            Top Rated
          </StyledTopRated>
          <StyledUpcoming onClick={() => handleNavigate("/upcoming")}>
            Upcoming
          </StyledUpcoming>
        </div>
      </StyledNav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        {user ? (
          <StyledLogout onClick={handleLogout}>로그아웃</StyledLogout>
        ) : (
          <>
            <StyledSignUp onClick={() => handleNavigate("/signup")}>
              회원가입
            </StyledSignUp>
            <StyledLogin onClick={() => handleNavigate("/login")}>
              로그인
            </StyledLogin>
          </>
        )}
        <StyledPopular onClick={() => handleNavigate("/popular")}>
          Popular
        </StyledPopular>
        <StyledNowPlaying onClick={() => handleNavigate("/now-playing")}>
          Now Playing
        </StyledNowPlaying>
        <StyledTopRated onClick={() => handleNavigate("/top-rated")}>
          Top Rated
        </StyledTopRated>
        <StyledUpcoming onClick={() => handleNavigate("/upcoming")}>
          Upcoming
        </StyledUpcoming>
      </Sidebar>
    </>
  );
};
