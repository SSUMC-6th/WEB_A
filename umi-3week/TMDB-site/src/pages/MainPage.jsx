import React from "react";
import './Page.css'

function MainPage(){
    return(
        <div className="wrapper">
            <div className="banner">
                <h1>환영합니다</h1>
            </div>
            <div className="search-area">
                <h1>🎥 Find you movies !</h1>
                <div className="search-container">
                    <div className="search-bar"></div>
                    <div className="search-icon"></div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;