import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "./apis/PostSignUp";
import {
  StyledButton,
  StyledTitle,
  StyledWrapper,
  StyledInput,
  ErrorMessage,
  LoginLink,
} from "./SignUp.style";

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    id: "",
    email: "",
    age: "",
    password: "",
    passwordConfirm: "",
  });

  const handleGoToLogin = () => {
    navigate("/login");
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let errMsg = "";
    const ageVal = parseInt(value, 10);
    switch (field) {
      case "name":
        errMsg = value ? "" : "이름을 입력해주세요.";
        break;
      case "id":
        errMsg = value ? "" : "아이디를 입력해주세요.";
        break;
      case "email":
        errMsg = value.includes("@") ? "" : "유효한 이메일을 입력해주세요.";
        break;
      case "age":
        errMsg = !value
          ? "나이를 입력해주세요."
          : isNaN(ageVal) || ageVal !== parseFloat(value)
          ? "나이는 정수여야 합니다."
          : ageVal < 0
          ? "나이는 음수가 될 수 없습니다."
          : ageVal < 19
          ? "19살 미만은 가입이 불가능합니다."
          : "";
        break;
      case "password":
        errMsg = !value
          ? "비밀번호를 입력해주세요."
          : value.length < 4
          ? "비밀번호는 최소 4자리 이상이어야 합니다."
          : value.length > 12
          ? "비밀번호는 최대 12자리까지 가능합니다."
          : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(
              value
            )
          ? "영어 대소문자, 숫자, 특수문자를 모두 포함해야 합니다."
          : "";
        break;
      case "passwordConfirm":
        errMsg =
          value !== formData.password ? "비밀번호가 일치하지 않습니다." : "";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errMsg }));
  };

  const canSubmit = () => {
    return (
      Object.values(formData).every((x) => x) &&
      Object.values(errors).every((error) => !error)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSubmit()) {
      try {
        const response = await signUp(formData);
        console.log("회원가입 성공:", response.data);
        alert("회원가입이 성공적으로 완료되었습니다.");
        navigate("/login");
      } catch (error) {
        console.error("회원가입 실패:", error);
        alert(
          `회원가입 중 오류가 발생했습니다: ${
            error.response?.data?.message || error.message
          }`
        );
      }
    } else {
      alert("모든 필드를 올바르게 채우고 에러를 해결해 주세요.");
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>회원가입 페이지</StyledTitle>
      <StyledInput
        placeholder="이름을 입력해주세요"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        type="text"
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      <StyledInput
        placeholder="아이디를 입력해주세요"
        value={formData.id}
        onChange={(e) => handleChange("id", e.target.value)}
        type="text"
      />
      {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
      <StyledInput
        placeholder="이메일을 입력해주세요"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        type="text"
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <StyledInput
        type="number"
        placeholder="나이를 입력해주세요"
        value={formData.age}
        onChange={(e) => handleChange("age", e.target.value)}
      />
      {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
      <StyledInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      <StyledInput
        type="password"
        placeholder="비밀번호 확인"
        value={formData.passwordConfirm}
        onChange={(e) => handleChange("passwordConfirm", e.target.value)}
      />
      {errors.passwordConfirm && (
        <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
      )}
      <StyledButton
        onClick={handleSubmit}
        disabled={!canSubmit()}
        canSubmit={canSubmit()}
      >
        제출하기
      </StyledButton>
      <LoginLink onClick={handleGoToLogin}>
        이미 아이디가 있으신가요? 로그인 페이지로 이동하기
      </LoginLink>
    </StyledWrapper>
  );
};
