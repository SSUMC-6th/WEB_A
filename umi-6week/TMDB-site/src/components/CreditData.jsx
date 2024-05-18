// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CreditItem from "./CreditItem";

const Wrapper = styled.div`
  width: 100vw;
  height: 770px;
  display: flex;
  justify-content: center;
  margin: 60px 0px;
`;

const Container = styled.div`
  width: 85vw;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`;

const SubTitle = styled.h1`
  width: 90%;
  color: white;
  text-align: left;
`;

const Cast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
`;

const Crew = styled(Cast)``;

// eslint-disable-next-line react/prop-types
function CreditData({ movie_id }) {
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzQ0NDVkYTFkMDBkYTg5ZWQ4ZTAwMWI3YTgyODZlMCIsInN1YiI6IjY1YzFkZTIxOGU4ZDMwMDE2Mjc3ZDE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzdBlisLcPNQkSG7QN-39G7eW1rERKixo8VH5Ym3mwc",
    },
  };

  useEffect(() => {
    setLoading(true);
    //cast
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCasts(response.cast.slice(0, 8)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
    //crew
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setCrews(response.crew.slice(0, 8)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Wrapper>
      <Container>
        <SubTitle>Main Cast</SubTitle>
        <Cast>
          {casts &&
            casts.map((cast) => (
              <CreditItem
                key={cast.id}
                name={cast.original_name}
                role={cast.character}
                profilePath={cast.profile_path}
              />
            ))}
        </Cast>
        <SubTitle>Main Crew</SubTitle>
        <Crew>
          {crews &&
            crews.map((crew) => (
              <CreditItem
                key={crew.id}
                name={crew.original_name}
                role={crew.job}
                profilePath={crew.profile_path}
              />
            ))}
        </Crew>
      </Container>
    </Wrapper>
  );
}

export default CreditData;
