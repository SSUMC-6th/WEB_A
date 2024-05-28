// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  margin-bottom: 4px;
  background-color: white;
  color: black;
  border-radius: 999px;
  border: none;
  &::placeholder {
    color: gray;
  }
`;

const ValidText = styled.div`
  font-size: 14px;
  color: red;
  margin: 10px 0px 16px 0px;
  text-align: left;
  margin-left: 18px;
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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  return (
    <>
      <Container>
        <Title>로그인</Title>
        <FormContainer
          onSubmit={handleSubmit((data) => {
            fetch(`http://localhost:8080/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: data.id,
                password: data.password,
              }),
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.token != undefined) {
                  localStorage.setItem("token", res.token);
                  alert("로그인 되었습니다");
                  navigate("/");
                } else {
                  alert("로그인 정보를 다시 한 번 확인해주세요");
                }
              });
          })}
        >
          <InputContainer>
            <Input
              {...register("id", {
                required: "아이디를 입력해주세요!",
              })}
              type="text"
              placeholder="아이디를 입력해주세요"
            />
            <ValidText>{errors?.id?.message}</ValidText>
            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요!",
              })}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <ValidText>{errors?.password?.message}</ValidText>
          </InputContainer>
          <SubmitBtn type="submit" value="로그인" disabled={!isValid} />
        </FormContainer>
      </Container>
    </>
  );
}

export default LogInPage;
