// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OverviewContainer = styled.div`
  opacity: 0;
  width: 176px;
  height: 368px;
  background: rgb(0, 0, 0, 0.7);
  position: absolute;
  color: white;
  padding: 12px;
  border-radius: 8px;
`;

const PosterContainer = styled.div`
  width: 200px;
  height: 392px;
  background-color: #222;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  ${OverviewContainer}: hover {
    opacity: 1;
  }
`;

const OverviewTitle = styled.p`
  font-weight: 600;
`;

const Overview = styled.p`
  height: 290px;
  overflow: hidden;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
`;

const PosterOutline = styled.div`
  margin: 12px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 120px;
  height: 40px;
  color: white;
  text-align: left;
  overflow: hidden;
`;

const Vote = styled.div``;

const VoteAverage = styled.p`
  display: inline-block;
  color: #999;
  margin: 0px 0px 0px 3px;
`;

const LoadImage = styled.div`
  width: 200px;
  height: 300px;
  background-color: #999;
`;

// eslint-disable-next-line react/prop-types
function PosterItem({ id, title, voteAverage, overview, posterPath }) {
  const navigate = useNavigate();

  return (
    <>
      <PosterContainer onClick={() => navigate(`/movie/${id}`)}>
        <OverviewContainer>
          <OverviewTitle>{title}</OverviewTitle>
          <Overview>{overview}</Overview>
        </OverviewContainer>
        {posterPath === null ? (
          <LoadImage />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w200${posterPath}`}
            width="200px"
            height="300px"
          />
        )}
        <PosterOutline>
          <Title>{title}</Title>
          <Vote>
            <img src="src/assets/star.png" width="12px" height="12px" />
            <VoteAverage>{voteAverage}</VoteAverage>
          </Vote>
        </PosterOutline>
      </PosterContainer>
    </>
  );
}

export default PosterItem;
