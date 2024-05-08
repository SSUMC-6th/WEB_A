import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { StyledNowPlayingPage } from './NowPlayingPage.style';

function NowPlayingPage() {
    return (
      <>
        <StyledNowPlayingPage>현재 상영중인 영화</StyledNowPlayingPage>
        <MovieCard urlType="now_playing"/>
      </>
    )
  }
  
  export default NowPlayingPage
  