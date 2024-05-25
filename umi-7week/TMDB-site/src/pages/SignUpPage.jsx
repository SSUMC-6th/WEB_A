// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Text = styled.div`
  color: white;
  font-weight: 200;
`;

const LoginLink = styled.a`
  color: white;
  font-weight: 600;
  margin-left: 40px;
`;

function SignUpPage() {
  const navigate = useNavigate();

  const {
    register, //입력필드를 흑에 등록
    handleSubmit, //폼 제출 시 실행할 함수 정의
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const password = useRef({}); //이건 왜??
  password.current = watch("password", "");
  //비밀번호 확인
  const validatePassword = (value) => {
    if (value !== password.current) {
      return "비밀번호가 일치하지 않습니다";
    }
    if (errors.passwordConfirm) {
      errors.passwordConfirm.message = "비밀번호가 일치하지 않습니다";
    }
    return true;
  };
  //19세 미만
  const validateAdult = (value) => {
    if (value < 19) {
      return "우리 영화 사이트는 19살 이상만 가입이 가능합니다";
    }
  };
  //소수
  const validatePoint = (value) => {
    if (value % 1 !== 0) {
      return "나이는 소수가 될 수 없습니다";
    }
  };

  return (
    <>
      <Container>
        <Title>회원가입</Title>
        <FormContainer
          onSubmit={handleSubmit((data) => {
            console.log(data);
            navigate(`/login`);
            alert("회원가입 완료!");
          })}
        >
          <InputContainer>
            <Input
              {...register("name", {
                required: "이름은 필수 입력입니다",
              })}
              type="text"
              placeholder="이름을 입력해주세요"
            />
            <ValidText>{errors?.name?.message}</ValidText>
            <Input
              {...register("id", {
                required: "아이디는 필수 입력입니다",
              })}
              type="text"
              placeholder="아이디를 입력해주세요"
            />
            <ValidText>{errors?.id?.message}</ValidText>
            <Input
              {...register("email", {
                required: "이메일은 필수 입력입니다",
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "이메일 형식이 올바르지 않습니다",
                },
              })}
              type="email"
              placeholder="이메일을 입력해주세요"
            />
            <ValidText>{errors?.email?.message}</ValidText>
            <Input
              {...register("age", {
                required: "나이는 필수 입력입니다",
                min: {
                  value: 0,
                  message: "나이는 음수가 될 수 없습니다",
                },
                validate: validateAdult,
                validatePoint,
                pattern: {
                  value: /^[0-9]*$/,
                  message: "나이 형식이 올바르지 않습니다",
                },
              })}
              type="age"
              placeholder="나이를 입력해주세요"
            />
            <ValidText>{errors?.age?.message}</ValidText>
            <Input
              {...register("password", {
                required: "비밀번호는 필수 입력입니다",
                minLength: {
                  value: 4,
                  message: "비밀번호는 최소 4자리 이상이어야 합니다",
                },
                maxLength: {
                  value: 12,
                  message: "비밀번호는 최대 12자리까지 가능합니다",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/,
                  message: "비밀번호 형식이 올바르지 않습니다",
                },
              })}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <ValidText>{errors?.password?.message}</ValidText>
            <Input
              {...register("passwordConfirm", {
                required: "비밀번호 확인은 필수입니다",
                validate: validatePassword,
              })}
              type="password"
              placeholder="비밀번호 확인"
            />
            <ValidText>{errors?.passwordConfirm?.message}</ValidText>
          </InputContainer>
          <SubmitBtn type="submit" value="가입하기" disabled={!isValid} />
        </FormContainer>
        <LoginContainer>
          <Text>이미 아이디가 있으신가요?</Text>
          <LoginLink href="/">로그인 페이지로 이동하기</LoginLink>
        </LoginContainer>
      </Container>
    </>
  );
}

export default SignUpPage;
