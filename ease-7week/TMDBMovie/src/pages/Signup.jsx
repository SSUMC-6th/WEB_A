import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form"
import styled from 'styled-components'

const SignupContainer = styled.div`
    margin: 0 auto;    
    margin-top: 20px;
    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const SignupTitle = styled.h3`
    color: white;
`;
const FormSt = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputSt = styled.input`
    margin: 0 auto;
    margin-top: 40px;
    padding-left: 15px;
    width: 500px;
    height: 40px;
    border-radius: 20px;
    border: 0;
`;
const ButtonSt = styled.button`
    margin: 0 auto;
    background-color: white;
    width: 500px;
    height: 50px;
    border: 0;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 60px;
    cursor: pointer;
`;

const ErrorSt = styled.div`
    color: red;
    margin: 0 auto;
    width: 500px;
    text-align: left;
    font-size: 12px;
    padding-left: 15px;
    padding-top: 8px;
`;
const GoLoginContainer=styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;
const HaveID = styled.div`
    color: white;
    padding: 20px;
    cursor: pointer;
`;
const GoLogin = styled.div`
    color: white;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
`;

function Signup(){
    const navigate = useNavigate();

    const {
        register,
        formState: {errors},
        watch,
        getValues,
        handleSubmit,
        setError,
    } = useForm({mode: 'onChange'});

    const watchInput = watch();
    const [isInputFilled, setIsInputFilled] = useState(false);
    useEffect(()=> {
        const allInputFilled = Object.values(watchInput).every(field=>field);
        setIsInputFilled(allInputFilled);
    }, [watchInput]);

    const onSubmit = data =>{
        console.log(data);
        alert("회원가입에 성공했습니다!");
        navigate('/');
    }

    return(
        <SignupContainer>
            <SignupTitle>회원가입 페이지</SignupTitle>
            <FormSt onSubmit={handleSubmit(onSubmit)}>
                <InputSt type="text" {...register("name", {
                    required: "이름을 입력해주세요!"
                    }
                )}
                placeholder="이름을 입력해주세요"/>
                <ErrorSt>{errors?.name?.message}</ErrorSt> {/*validation 실패 시 에러 메시지 표시*/}
                <InputSt type="text" {...register("ID", {
                    required: "아이디를 입력해주세요!"
                    }
                )}
                placeholder="아이디를 입력해주세요"/>
                <ErrorSt>{errors?.ID?.message}</ErrorSt>
                <InputSt type="text" {...register("email", {
                    required: "이메일을 입력해주세요!",
                    pattern: {
                        value: /.+@.+./,
                        message: "이메일 형식에 맞게 다시 입력해주세요!"
                    }
                    }
                )}
                placeholder="이메일을 입력해주세요"/>
                <ErrorSt>{errors?.email?.message}</ErrorSt>
                <InputSt type="text" {...register("age", {
                    required: "나이를 입력해주세요!",
                    validate: {
                        isNumber: value => !isNaN(value) || "나이는 숫자로 입력해주세요!",
                        isPositive: value => parseInt(value, 10) >= 0 || "나이는 양수여야 합니다!",
                        isInteger: value => Number.isInteger(parseFloat(value)) || "나이를 실수로 입력할 수 없습니다!",
                        isOldEnough: value => parseInt(value, 10) >= 19 || "19세 미만은 가입할 수 없습니다!"
                      }
                    }
                )}
                placeholder="나이를 입력해주세요"/>
                <ErrorSt>{errors?.age?.message}</ErrorSt>
                <InputSt type="password" {...register("pwd", {
                    required: "비밀번호를 입력해주세요!",
                    minLength: {
                        value: 4,
                        message: "최소 4자리 이상 입력해주세요!"
                    },
                    maxLength: {
                        value: 12,
                        message: "최대 12자리까지 가능합니다!"
                    },
                    pattern: {
                        value: /(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}/,
                        message: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요!"
                    }
                    }
                )}
                placeholder="비밀번호를 입력해주세요"/>
                <ErrorSt>{errors?.pwd?.message}</ErrorSt>
                <InputSt type="password" {...register("pwdchk", {
                    required: "비밀번호를 다시 입력해주세요!",
                    validate: {
                        MatchPwd: (value) => {
                            const { pwd } = getValues();
                            return pwd === value || "비밀번호가 일치하지 않습니다!";
                        }
                    }
                    }
                )}
                placeholder="비밀번호 확인"/>
                <ErrorSt>{errors?.pwdchk?.message}</ErrorSt>
                <ButtonSt type="submit" disabled={!isInputFilled}>제출하기</ButtonSt>
            </FormSt>
            <GoLoginContainer>
                <HaveID>이미 아이디가 있으신가요?</HaveID>
                <GoLogin onClick={() => {navigate(`/login`)}}>로그인 페이지로 이동하기</GoLogin>
            </GoLoginContainer>
        </SignupContainer>
        
    )
}

export default Signup