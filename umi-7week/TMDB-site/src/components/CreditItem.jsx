// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const CreditContainer = styled.div`
  width: 240px;
  display: flex;
  border: 1px solid #444;
  border-radius: 8px;
`;

const Image = styled.div`
  width: 70px;
  height: 84px;
  border-radius: 8px 0px 0px 8px;
`;

const ProflieImage = styled(Image)`
  background-image: url(${(props) => props.path});
  background-size: cover;
`;

const LoadImage = styled(Image)`
  background-color: #333;
`;

const TextContainer = styled.div`
  text-align: left;
  margin-left: 12px;
  margin-top: 14px;
`;

const NameText = styled.div`
  color: white;
  font-size: 17.5px;
  margin-bottom: 2px;
`;

const RoleText = styled.div`
  color: #999;
  font-size: 14px;
`;

// eslint-disable-next-line react/prop-types
function CreditItem({ name, role, profilePath }) {
  return (
    <>
      <CreditContainer>
        {profilePath === null ? (
          <LoadImage />
        ) : (
          <ProflieImage
            path={`https://image.tmdb.org/t/p/w200${profilePath}`}
          />
        )}
        <TextContainer>
          <NameText>{name}</NameText>
          <RoleText>{role}</RoleText>
        </TextContainer>
      </CreditContainer>
    </>
  );
}

export default CreditItem;
