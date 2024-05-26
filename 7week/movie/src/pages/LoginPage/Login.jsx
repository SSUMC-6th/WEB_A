import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/PostLogin";
import { UserContext } from "../../components/UserData/UsetData";
import {
  StyledButton,
  StyledTitle,
  StyledWrapper,
  StyledInput,
  ErrorMessage,
} from "./Login.style";

export const Login = () => {
  const navigate = useNavigate();
  const { login: loginUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let errMsg = "";
    switch (field) {
      case "id":
        errMsg = value ? "" : "아이디를 입력해주세요.";
        break;
      case "password":
        if (!value) {
          errMsg = "비밀번호를 입력해주세요.";
        } else if (value.length < 4) {
          errMsg = "비밀번호는 최소 4자리 이상이어야 합니다.";
        } else if (value.length > 12) {
          errMsg = "비밀번호는 최대 12자리까지 가능합니다.";
        } else if (
          !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{4,}$/.test(value)
        ) {
          errMsg =
            "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        }
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
        const response = await login({
          username: formData.id,
          password: formData.password,
        });
        console.log("로그인 성공:", response.data);

        // 유저 정보를 가져오는 대신 로그인 상태 설정
        loginUser({ username: response.data.username }, response.data.token);

        alert("로그인이 성공적으로 완료되었습니다.");
        navigate("/");
      } catch (error) {
        console.error(
          "로그인 실패:",
          error.response ? error.response.data : error.message
        );
        alert(
          `로그인 중 오류가 발생했습니다: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      }
    } else {
      alert("모든 필드를 올바르게 채우고 에러를 해결해 주세요.");
    }
  };

  return (
    <StyledWrapper>
      <StyledTitle>로그인 페이지</StyledTitle>
      <StyledInput
        placeholder="아이디를 입력해주세요"
        value={formData.id}
        onChange={(e) => handleChange("id", e.target.value)}
        type="text"
      />
      {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}

      <StyledInput
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

      <StyledButton
        onClick={handleSubmit}
        disabled={!canSubmit()}
        canSubmit={canSubmit()}
      >
        로그인
      </StyledButton>
    </StyledWrapper>
  );
};
