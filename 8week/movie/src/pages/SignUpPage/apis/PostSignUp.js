import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const signUp = (formData) => {
  const requestData = {
    name: formData.name,
    email: formData.email,
    age: formData.age,
    username: formData.id,
    password: formData.password,
    passwordCheck: formData.passwordConfirm,
  };

  return axios.post(`${API_URL}/signup`, requestData);
};
