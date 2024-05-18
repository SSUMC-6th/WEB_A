// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const NameText = styled.div`
  color: white;
  margin-bottom: 2px;
`;

const RoleText = styled.div`
  color: #999;
`;

const CreditContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Image = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 4px;
  margin-bottom: 14px;
`;

const ProflieImage = styled(Image)`
  background-image: url(${(props) => props.path});
  background-size: cover;
`;

const LoadImage = styled(Image)`
  background-color: #333;
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
        <NameText>{name}</NameText>
        <RoleText>{role}</RoleText>
      </CreditContainer>
    </>
  );
}

export default CreditItem;
