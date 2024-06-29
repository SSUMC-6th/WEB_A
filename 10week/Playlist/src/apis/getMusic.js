import axios from "axios";

const API_URL = "http://localhost:8080";

export const getMusic = async () => {
  try {
    const response = await axios.get(`${API_URL}/musics`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = response.data.map((item) => ({
      ...item,
      price: parseFloat(item.price),
      amount: parseInt(item.amount, 10),
    }));
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message || "오류");
  }
};
