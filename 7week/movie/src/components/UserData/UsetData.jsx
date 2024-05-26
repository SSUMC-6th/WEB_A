import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserInfo } from "../../apis/GetUserInfo";

export const UserContext = createContext({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserInfo(token)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("유저 정보 불러오기 실패:", error);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    getUserInfo(token)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("유저 정보 불러오기 실패:", error);
      });
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
