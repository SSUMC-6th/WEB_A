// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);
  const navigate = useNavigate();

  //useForm에서 자동으로 받아와지는 data
  //로그인
  const login = (data) => {
    fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.id,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          setApiLoading(true);
          alert("로그인 되었습니다");
          navigate("/");
        } else {
          alert("로그인 정보를 다시 한 번 확인해주세요");
        }
      });
  };

  //로그아웃
  const logout = () => {
    localStorage.removeItem("token");
    setUsername("");
    setIsLoggedIn(false);
  };

  //사용자 정보(이름) 가져오기
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const getUserInfo = async () => {
        await fetch(`http://localhost:8080/auth/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => setUsername(res.name))
          .then(() => setIsLoggedIn(true))
          .then(() => setApiLoading(false));
      };
      getUserInfo();
    }
  }, [apiLoading]);

  return (
    <AuthContext.Provider
      value={{ username, isLoggedIn, apiLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
