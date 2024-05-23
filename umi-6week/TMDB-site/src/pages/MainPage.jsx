//eslint-disable-next-line
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import PosterItem from "../components/PosterItem";
import Loading from "../components/Loading";
import useDebounce from "../hooks/useDebounce";

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  padding-bottom: 100px;
  height: fit-content;
  text-align: center;
  color: white;
  overflow: hidden;
`;

// const Banner = styled.div`
//   width: 100vw;
//   height: 100px;
// `;

const HeadText = styled.h1``;

const SearchArea = styled.div`
  width: 100vw;
`;

const SearchContainer = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  margin-top: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SearchBar = styled.input`
  width: 36vw;
  height: 50px;
  background-color: white;
  border-radius: 999px;
  padding-left: 24px;
  border: none;
`;

const SearchIcon = styled.button`
  width: 44px;
  height: 44px;
  background-color: gold;
  border-radius: 999px;
  margin-left: 12px;
  margin-top: 5px;
  border: none;
`;

const ResultArea = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ResultBox = styled.div`
  width: 940px;
  height: 440px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
  margin-top: 80px;
  padding: 32px 0px;
  background-color: #444;
  border-radius: 8px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background: gold;
  }
`;

const LoadText = styled.h2`
  color: white;
  text-align: center;
  margin-top: 200px;
`;

function MainPage() {
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const debounceWord = useDebounce(searchWord, 500);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ0NDVkYTFkMDBkYTg5ZWQ4ZTAwMWI3YTgyODZlMCIsInN1YiI6IjY1YzFkZTIxOGU4ZDMwMDE2Mjc3ZDE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzdBlisLcPNQkSG7QN-39G7eW1rERKixo8VH5Ym3mwc",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${debounceWord}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, [debounceWord]);

  return (
    <Wrapper>
      {/* <Banner>
        <HeadText>환영합니다</HeadText>
      </Banner> */}
      <SearchArea>
        <HeadText>🎥 Find your movies !</HeadText>
        <SearchContainer>
          <SearchBar onChange={(e) => setSearchWord(e.target.value)} />
          <SearchIcon>🔍</SearchIcon>
        </SearchContainer>
      </SearchArea>
      {debounceWord == "" ? null : (
        <ResultArea>
          <ResultBox>
            {loading ? (
              <LoadText>데이터를 받아오는 중입니다...</LoadText>
            ) : (
              movies &&
              movies.map((movie) => (
                <PosterItem
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  overview={movie.overview}
                  posterPath={movie.poster_path}
                />
              ))
            )}
          </ResultBox>
        </ResultArea>
      )}
    </Wrapper>
  );
}

export default MainPage;
