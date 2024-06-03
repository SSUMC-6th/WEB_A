const API_URL = "http://localhost:8080/auth";

export const login = async (loginData) => {
  const requestData = {
    username: loginData.id,
    password: loginData.password,
  };

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};