import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form"
import styled from 'styled-components'

const LoginContainer = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    padding-top: 50px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const LoginTitle = styled.h3`
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
    background-color: white;
    width: 500px;
    height: 50px;
    border: 0;
    border-radius: 25px;
    font-weight: bold;
    margin: 0 auto;
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

function Login(){
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
    

    const onSubmit = async data =>{
        try{
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password,
                }),
            });
            const responseData = await response.json();
            if(response.status==200){
                console.log(data);
                localStorage.setItem("token", responseData.token);
                alert("로그인에 성공했습니다!");
                navigate('/');
            } else if(response.status==401){
                alert(responseData.message);
            }
        } catch (error) {
            console.error('로그인 중 에러 발생:', error);
            alert('로그인 과정에서 오류가 발생했습니다.');
        }
    }

    return(
        <LoginContainer>
        <LoginTitle>로그인 페이지</LoginTitle>
        <FormSt onSubmit={handleSubmit(onSubmit)}>
            <InputSt type="text" {...register("username", {
                required: "아이디를 입력해주세요!"
                }
            )}
            placeholder="아이디를 입력해주세요"/>
            <ErrorSt>{errors?.username?.message}</ErrorSt> {/*validation 실패 시 에러 메시지 표시*/}
            <InputSt type="password" {...register("password", {
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
            <ErrorSt>{errors?.password?.message}</ErrorSt>
            <ButtonSt type="submit" disabled={!isInputFilled}>로그인</ButtonSt>
        </FormSt>
        </LoginContainer>
    )
}

export default Login