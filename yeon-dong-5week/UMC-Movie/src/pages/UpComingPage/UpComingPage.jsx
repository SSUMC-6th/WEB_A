import React, { useState, useEffect } from 'react';
import { StyledUpComingPage } from './UpComingPage.style';
import MovieCard from '../../components/MovieCard/MovieCard';

function UpComingPage() {
  return (
    <>
      <StyledUpComingPage>개봉 예정 영화</StyledUpComingPage>
      <MovieCard urlType="upcoming"/>
    </>
  )
}
  export default UpComingPage
  