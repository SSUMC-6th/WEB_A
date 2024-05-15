import React, { useState, useEffect } from 'react';
import { StyledTopRatedPage } from './TopRatedPage.style';
import MovieCard from '../../components/MovieCard/MovieCard';

function TopRatedPage() {
  return (
    <>
      <StyledTopRatedPage>평점 높은 영화</StyledTopRatedPage>
      <MovieCard urlType="top_rated"/>
    </>
  )
}
  
  export default TopRatedPage
  