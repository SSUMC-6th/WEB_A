import React from "react";
import './PosterItem.css';

function PosterItem({title, voteAverage, overview, posterPath}){
    return(
        <>
        <div className="poster-container">
            <div className="overview-container">
                <p className="overview-title">{title}</p>
                <p className="overview">{overview}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w200${posterPath}`} width="200px" height="300px"/>
            <div className="poster-outline">
                <div className="title">{title}</div>
                <div className="vote">
                    <img src="src/assets/star.png" width="12px" height="12px"/>
                    <p className="vote-average">{voteAverage}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default PosterItem;