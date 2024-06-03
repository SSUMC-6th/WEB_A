import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUserInfo = async () => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        };

        try {
          const response = await fetch('http://localhost:8080/auth/me', options);
          const data = await response.json();
          setUsername(data.name);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Failed to fetch user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, []);

  const login = async (token) => {
    localStorage.setItem('token', token);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const response = await fetch('http://localhost:8080/auth/me', options);
      const data = await response.json();
      setUsername(data.name);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to fetch user info during login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
