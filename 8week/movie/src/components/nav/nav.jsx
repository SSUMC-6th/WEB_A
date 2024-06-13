import { useContext } from "react";
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
} from "./nav.style";

export const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <StyledNav>
      <StyledHome onClick={() => navigate("/")}>UMC Movie</StyledHome>
      {user ? (
        <StyledLogout onClick={handleLogout}>로그아웃</StyledLogout>
      ) : (
        <>
          <StyledSignUp onClick={handleGoToSignUp}>회원가입</StyledSignUp>
          <StyledLogin onClick={handleGoToLogin}>로그인</StyledLogin>
        </>
      )}
      <StyledPopular onClick={() => navigate("/popular")}>
        Popular
      </StyledPopular>
      <StyledNowPlaying onClick={() => navigate("/now-playing")}>
        Now Playing
      </StyledNowPlaying>
      <StyledTopRated onClick={() => navigate("/top-rated")}>
        Top Rated
      </StyledTopRated>
      <StyledUpcoming onClick={() => navigate("/upcoming")}>
        Upcoming
      </StyledUpcoming>
    </StyledNav>
  );
};
