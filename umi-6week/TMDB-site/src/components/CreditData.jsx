// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CreditItem from "./CreditItem";
import axios from "axios";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 100px 0px 80px 0px;
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`;

const SubTitleNav = styled.div`
  width: 100vw;
  height: fit-content;
  justify-content: center;
  display: flex;
  margin-bottom: 48px;
  gap: 20px;
`;

const SubTitle = styled.button`
  width: 170px;
  height: fit-content;
  color: ${(props) => props.color};
  font-size: 32px;
  background: none;
  border: none;
  border-bottom: 3px solid ${(props) => props.color};
  padding-bottom: 8px;
  transition: color 0.5s;
`;

const Cast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
  gap: 20px 16px;
`;

const Crew = styled(Cast)``;

// eslint-disable-next-line react/prop-types
function CreditData({ movie_id }) {
  const [casts, setCasts] = useState([]);
  const [crews, setCrews] = useState([]);
  const [creditNav, setCreditNav] = useState(true);
  const [loading, setLoading] = useState(true);

  const onClickCasts = () => {
    setCreditNav(true);
  };

  const onClickCrews = () => {
    setCreditNav(false);
  };

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
          {
            params: {
              api_key: "d34445da1d00da89ed8e001b7a8286e0",
              language: "en-US",
              page: 1,
            },
          }
        );
        setCasts(response.data.cast.slice(0, 8));
        setCrews(response.data.crew.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error("API 에러", error);
        setCasts([]);
        setCrews([]);
      }
    };
    getCredits();
  }, []);

  return (
    <Wrapper>
      <Container>
        <SubTitleNav>
          <SubTitle onClick={onClickCasts} color={creditNav ? "white" : "gray"}>
            Main Cast
          </SubTitle>
          <SubTitle onClick={onClickCrews} color={creditNav ? "gray" : "white"}>
            Main Crew
          </SubTitle>
        </SubTitleNav>
        {creditNav ? (
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
        ) : (
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
        )}
      </Container>
    </Wrapper>
  );
}

export default CreditData;
