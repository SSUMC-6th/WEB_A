import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.div`
        background-color: rgb(3, 37, 65);
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 7%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
        z-index: 2;
    `;

    const Logo = styled.div`
        a{
            text-decoration: none;
        }
    `;
    const NavbarSt = styled.div`
        display: flex;
        flex-direction: row;
    `;
      
    // const LoginSt = styled.button`
    //     color: yellow;
    //     border: 0;
    //     background-color: transparent;
    // `;

    const NavbarMenu = styled(NavLink)`
        display: ${(props)=>props.isLogin==="로그아웃"? 'none' :'block'};
        text-decoration: none;
        color: white;
        &.active{
            color: yellow;
        }
   `;
      
    const NavContent = styled.div`
        font-weight: 550;
        margin: 14px; 
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
            transition-duration: 0.5s;
        }
    `;

    const LoginContainer = styled.div`
        
    `;

function Navbar() {
    const [isLogin, setIsLogin] = useState("로그인");

    useEffect(()=>{
        if (localStorage.getItem('token')!=null){
            setIsLogin("로그아웃");
            console.log(isLogin);
        }
    }, [])

    function onLogout(){
        if(isLogin==="로그아웃"){
            setIsLogin("로그인");
            localStorage.removeItem("token");
        }
    }

    return (
    <NavbarContainer>
        <Logo>
            <NavbarMenu to='/' >
                <NavContent>UMC Movie</NavContent>
            </NavbarMenu>
        </Logo>
        <NavbarSt>
                <NavbarMenu to="/signup" isLogin={isLogin}>
                    <NavContent>회원가입</NavContent>
                </NavbarMenu>
                <NavbarMenu to="/login" onClick={(onLogout)}>
                    <NavContent>{isLogin}</NavContent>
                </NavbarMenu>
            <NavbarMenu to="/popular">
                <NavContent>Popular</NavContent>
            </NavbarMenu>
            <NavbarMenu to="/nowplaying">
                <NavContent>Now Playing</NavContent>
            </NavbarMenu>
            <NavbarMenu to="/toprated">
                <NavContent>Top Rated</NavContent>
            </NavbarMenu>
            <NavbarMenu to="/upcoming">
                <NavContent>Upcoming</NavContent>
            </NavbarMenu>
        </NavbarSt>
    </NavbarContainer>
    )
}
  
  export default Navbar