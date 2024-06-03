import { Container, ValidationText, StyledInput, StyledError, StyledButton } from "./LoginPage.style";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../../components/AuthContext/AuthContext.jsx";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (data, value) => {
    setLoginData(prev => ({ ...prev, [data]: value }));
    validateField(data, value);
  };

  const validateField = (data, value) => {
    let errorMessage = '';
    switch (data) {
      case 'username':
        errorMessage = value ? '' : '아이디를 입력해주세요!';
        break;
      case 'password':
        if (!value) {
          errorMessage = '비밀번호를 입력해주세요!';
        } else if (value.length < 4) {
          errorMessage = '비밀번호는 최소 4자리 이상이어야 합니다.';
        } else if (value.length > 12) {
          errorMessage = '비밀번호는 최대 12자리까지 가능합니다.';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(value)) {
          errorMessage = '영어 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.';
        } else {
          errorMessage = '';
        }
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [data]: errorMessage }));
  };

  const canSubmit = () => {
    return Object.values(loginData).every(x => x) && Object.values(errors).every(error => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSubmit()) {
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        if (!response.ok) {
          throw new Error('로그인에 실패했습니다.');
        }

        const data = await response.json();
        login(data.token);
        alert('로그인을 성공했습니다!');
        navigate('/');
      } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        alert(error.message);
      }
    } else {
      alert('모든 필드를 올바르게 입력했는지 확인해주세요.');
    }
  };

  return (
    <Container>
      <ValidationText>로그인 페이지</ValidationText>
      <StyledInput
        placeholder="아이디를 입력해주세요"
        value={loginData.username}
        onChange={(e) => handleChange('username', e.target.value)}
        type="text"
      />
      {errors.username ? <StyledError $errMsg={errors.username}>{errors.username}</StyledError> : <StyledError>-</StyledError>}
      <StyledInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={loginData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      {errors.password ? <StyledError $errMsg={errors.password}>{errors.password}</StyledError> : <StyledError>-</StyledError>}
      <StyledButton onClick={handleSubmit} disabled={!canSubmit()} $canSubmit={canSubmit()}>로그인</StyledButton>
    </Container>
  );
}

export default LoginPage;
