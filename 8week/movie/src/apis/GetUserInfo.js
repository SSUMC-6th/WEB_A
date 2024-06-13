import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const getUserInfo = (token) => {
  return axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
