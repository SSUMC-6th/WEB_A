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

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledHome onClick={() => navigate("/")}>UMC Movie</StyledHome>
      <StyledSignUp>회원가입</StyledSignUp>
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
