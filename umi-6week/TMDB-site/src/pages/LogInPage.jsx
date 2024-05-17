// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  position: absolute;
  margin-top: 80px;
  text-align: center;
  left: 50%;
  transform: translate(-50%);
`;

const Title = styled.h1`
  color: white;
  margin: 40px 0px;
`;

const FormContainer = styled.form``;

const InputContainer = styled.div`
  margin-bottom: 60px;
`;

const Input = styled.input`
  width: 500px;
  height: 44px;
  padding-left: 16px;
  margin-bottom: 20px;
  background-color: white;
  color: black;
  border-radius: 999px;
  border: none;
  &::placeholder {
    color: gray;
  }
`;

const SubmitBtn = styled.input`
  width: 518px;
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  background-color: gold;
  color: black;
  border-radius: 999px;
  border: none;
  &:disabled {
    background-color: gray;
    color: black;
  }
`;

function LogInPage() {
  return (
    <>
      <Container>
        <Title>로그인</Title>
        <FormContainer>
          <InputContainer>
            <Input type="id" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
          </InputContainer>
          <SubmitBtn type="submit" value="로그인" />
        </FormContainer>
      </Container>
    </>
  );
}

export default LogInPage;
