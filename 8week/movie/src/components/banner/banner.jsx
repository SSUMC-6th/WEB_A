import { useContext } from "react";
import { UserContext } from "../../components/UserData/UsetData";
import { StyledBanner } from "./banner.style";

export const Banner = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <StyledBanner>로딩 중...</StyledBanner>;
  }

  return (
    <StyledBanner>
      {user ? `${user.name}님 환영합니다.` : "환영합니다"}
    </StyledBanner>
  );
};
