import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getUserInfo } from "../../apis/GetUserInfo";

export const UserContext = createContext({
  user: null,
  loading: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (userData, token) => {
    localStorage.setItem("token", token);
    setLoading(true);
    try {
      const response = await getUserInfo(token);
      setUser(response.data);
    } catch (error) {
      console.error("유저 정보 불러오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
