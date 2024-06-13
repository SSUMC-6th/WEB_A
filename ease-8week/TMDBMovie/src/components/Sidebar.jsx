import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import useStore from './Store';

const slideIn = keyframes`
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200%);
  }
`;

const NavbarContainer = styled.div`
  background-color: rgb(3, 50, 90);
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props)=>(props.show===null? 'none': 'flex')};
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  z-index: 2;
  animation: ${(props) => (props.show===true ? slideIn : slideOut)} 0.5s forwards;
  ${(props) => props.show === true && `
    @media (min-width: 768px) {
      display: none;
    }
  `}
`;

const NavbarSt = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarMenu = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    color: yellow;
  }
`;

const SignupMenu = styled(NavLink)`
  display: ${(props) => (props.isLogined === true ? 'none' : 'block')};
  text-decoration: none;
  color: white;

  &.active {
    color: yellow;
  }
`;

const LoginMenu = styled.div`
  text-decoration: none;
  color: ${(props) => (props.isLogined === true ? 'yellow' : 'white')};

  &.active {
    color: yellow;
  }
`;

const NavContent = styled.div`
  font-weight: 550;
  margin: 14px;
  cursor: pointer;
`;

function Sidebar({show, setShow}) {
  const navigate = useNavigate();
  const { isLogined, setIsLogined, setUser } = useStore((state) => state);

  const handleLogoutUser = () => {
    setIsLogined(false);
    setUser(null);
    localStorage.removeItem('token');
    alert('로그아웃되었습니다.');
  };

  const handleLoginout = () => {
    console.log(isLogined);
    if (isLogined === false) {
      navigate('/login');
      handleClose();
    } else {
      handleLogoutUser();
    }
  };

  const handleClose= () => {
    setShow(false);
  }

  useEffect(() => {
    console.log('로그인 상태 변경:', isLogined);
  }, [isLogined]);

  useEffect(()=>{
    console.log('show 변경:', show);
  }, [show]);
  return (
    <NavbarContainer show={show}>
      <NavbarSt>
        <SignupMenu to="/signup" isLogined={isLogined} onClick={handleClose}>
          <NavContent>회원가입</NavContent>
        </SignupMenu>
        <LoginMenu isLogined={isLogined} onClick={handleLoginout} >
          <NavContent>{isLogined === true ? '로그아웃' : '로그인'}</NavContent>
        </LoginMenu>
        <NavbarMenu to="/popular" onClick={handleClose}>
          <NavContent>Popular</NavContent>
        </NavbarMenu>
        <NavbarMenu to="/nowplaying" onClick={handleClose}>
          <NavContent>Now Playing</NavContent>
        </NavbarMenu>
        <NavbarMenu to="/toprated" onClick={handleClose}>
          <NavContent>Top Rated</NavContent>
        </NavbarMenu>
        <NavbarMenu to="/upcoming" onClick={handleClose}>
          <NavContent>Upcoming</NavContent>
        </NavbarMenu>
      </NavbarSt>
    </NavbarContainer>
  );
}

export default Sidebar;
