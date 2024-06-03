const API_URL = "http://localhost:8080/auth";

export const signUp = async (formData) => {
  const requestData = {
    name: formData.name,
    email: formData.email,
    age: formData.age,
    username: formData.id,
    password: formData.password,
    passwordCheck: formData.verify_password,
  };

  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error;
  }
};
