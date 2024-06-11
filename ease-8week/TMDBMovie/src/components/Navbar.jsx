import React, {useState, useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import useStore from "./Store"
import Sidebar from "./Sidebar"

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
        @media (max-width: 768px){
            display: none;
        }
    `;

    const SidebarSt = styled.div`
        display: none;
        cursor: pointer;
        font-size: 35px;
        color: white;
        padding-right: 10px;
        padding-bottom: 10px;
        @media(max-width: 768px){
            display: block;
        }
    `;
      
    // const LoginSt = styled.button`
    //     color: yellow;
    //     border: 0;
    //     background-color: transparent;
    // `;

    const NavbarMenu = styled(NavLink)`
        display: ${(props)=>props.isLogined===true? 'none' :'block'};
        text-decoration: none;
        color: white;
        &.active{
            color: yellow;
        }
   `;

    const LoginMenu = styled.div`
        text-decoration: none;
        color: ${(props)=>props.isLogined===true? 'yellow': 'white'};
        &.active{
        color: yellow;}
        
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




function Navbar() {
    const navigate = useNavigate();
    const {isLogined, setIsLogined, setUser} = useStore(state => state);
    const [showSidebar, setShowSidebar] = useState(null);

    const handleLogoutUser = () => {
        setIsLogined(false);
        setUser(false);
        localStorage.removeItem("token");
        alert("로그아웃되었습니다.");
    }

    function handleLoginout(){
        console.log(isLogined);
        if(isLogined===false){
            //로그아웃되어있으면 로그인 페이지로/ 로그인되어있으면 로그아웃으로 처리, 회원가입 같이 표시
            navigate("/login");
        }
        else{
            handleLogoutUser();
        }
    }

    function handleSidebar(){
        if(showSidebar===null || showSidebar===false){
            setShowSidebar(true);
        }
        if(showSidebar===true){
            setShowSidebar(false);
        }
    }
    

    return (
    <NavbarContainer>
        <Logo>
            <NavbarMenu to='/' >
                <NavContent onClick={()=>{showSidebar===true? setShowSidebar(false): none;}}>UMC Movie</NavContent>
            </NavbarMenu>
        </Logo>
        <NavbarSt>
                <NavbarMenu to="/signup" isLogined={isLogined}>
                    <NavContent>회원가입</NavContent>
                </NavbarMenu>
                <LoginMenu isLogined={isLogined} onClick={handleLoginout}>
                    <NavContent>{isLogined===true? "로그아웃": "로그인"}</NavContent>
                </LoginMenu>
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
        <SidebarSt onClick={handleSidebar}>≡</SidebarSt>
        <Sidebar show={showSidebar} setShow={setShowSidebar}/>
    </NavbarContainer>
    )
}
  
  export default Navbar