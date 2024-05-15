import { Container, ValidationText, StyledInput, StyledError, StyledButton } from "./SignUpPage.style"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        verify_password: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        verify_password: ''
    });

    const handleChange = (data, value) => {
        setFormData(prev => ({ ...prev, [data]: value }));
        validateField(data, value);
    };

    const validateField = (data, value) => {
        let errorMessage = '';
        const ageValue = parseInt(value, 10);
        switch (data) {
          case 'name':
            errorMessage = value ? '' : '이름을 입력해주세요!';
            break;
          case 'email':
            errorMessage = value.includes('@') ? '' : '유효한 이메일을 입력해주세요!';
            break;
          case 'age':
            if(!value){errorMessage = '나이를 입력해주세요!'}
            else if(value.includes('.')){errorMessage ='나이는 정수여야 합니다.'}
            else if(value.includes('-')){errorMessage ='나이는 음수가 될 수 없습니다.'}
            else if(ageValue < 19){errorMessage ='19살 미만은 가입이 불가능합니다.'}
            else{errorMessage = ''}
            break;
          case 'password':
            if(!value){errorMessage = '비밀번호를 입력해주세요!'}
            else if(value.length < 4){errorMessage ='비밀번호는 최소 4자리 이상이어야 합니다.'}
            else if(value.length > 12){errorMessage ='비밀번호는 최대 12자리까지 가능합니다.'}
            else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(value)){errorMessage ='영어 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.'}
            else{errorMessage = ''}
            break;
          case 'verify_password':
            errorMessage = value !== formData.password ? '비밀번호가 일치하지 않습니다.' : '';
            break;
        }
        setErrors(prev => ({ ...prev, [data]: errorMessage }));
      };
    
      const canSubmit = () => {
        return Object.values(formData).every(x => x) && Object.values(errors).every(error => !error);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (canSubmit()) {
          console.log('회원가입 정보:', formData);
          alert('회원가입을 성공했습니다!');
          navigate('/');
        } else {
          alert('모든 필드를 올바르게 입력했는지 확인해주세요.');
        }
      };

    return (
      <>
        <Container>
            <ValidationText>회원가입 페이지</ValidationText>
            <StyledInput
                placeholder="이름을 입력해주세요"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                type="text"
            />
            {errors.name ? <StyledError $errMsg={errors.name}>{errors.name}</StyledError> : <StyledError>-</StyledError>}
            <StyledInput
                placeholder="이메일을 입력해주세요"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                type="text"
            />
            {errors.email ? <StyledError $errMsg={errors.email}>{errors.email}</StyledError> : <StyledError>-</StyledError>}
            <StyledInput
                type="number"
                placeholder="나이를 입력해주세요"
                value={formData.age}
                onChange={(e) => handleChange('age', e.target.value)}
            />
            {errors.age ? <StyledError $errMsg={errors.age}>{errors.age}</StyledError> : <StyledError>-</StyledError>}
            <StyledInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
            />
            {errors.password ? <StyledError $errMsg={errors.password}>{errors.password}</StyledError> : <StyledError>-</StyledError>}
            <StyledInput
                type="password"
                placeholder="비밀번호 확인"
                value={formData.verify_password}
                onChange={(e) => handleChange('verify_password', e.target.value)}
            />
            {errors.verify_password ? <StyledError $errMsg={errors.verify_password}>{errors.verify_password}</StyledError> : <StyledError>-</StyledError>}
            <StyledButton onClick={handleSubmit} disabled={!canSubmit()} $canSubmit={canSubmit()}>제출하기</StyledButton>   
        </Container>
      </>
    )
  }
  
  export default SignUpPage
  