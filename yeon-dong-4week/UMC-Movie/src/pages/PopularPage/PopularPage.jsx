import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { StyledPopularPage } from './PopularPage.style';

function PopularPage() {
    return (
      <>
        <StyledPopularPage>인기 영화</StyledPopularPage>
        <MovieCard urlType="popular"/>
      </>
    )
  }
  
  export default PopularPage
  