import { useNavigate } from "react-router-dom";
import {
  StyledNav,
  StyledSignUp,
  StyledPopular,
  StyledNowPlaying,
  StyledTopRated,
  StyledUpcoming,
  StyledHome,
} from "./nav.style";
import { useState } from "react";

export const Nav = () => {

  const [login, setLogin] = useState(false);
  const [loginText, setLoginText] = useState("로그인");

  const handleLogin = () => {
    setLogin(prevLogin => !prevLogin);
    setLoginText(login ? "로그인" : "로그아웃");
  }
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledHome onClick={() => navigate("/")}>UMC Movie</StyledHome>
      <StyledSignUp onClick={handleLogin}>{loginText}</StyledSignUp>
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
