import api from "../../utils/axiosInstance";

export const submitForm = async (formData, isRegister) => {
  try {
    const endpoint = isRegister ? "/auth/register" : "/auth/login";
    const response = await api.post(endpoint, formData);
    return response.data;
  } catch (error) {
    console.error("Auth Error:", error.response?.data || error.message);
    throw error;
  }
};

export const googleAuth = async () => {
  try {
    
    const response = await api.get("/auth/google");
    
    return response.data;
  } catch (error) {
    console.error("Google Auth Error:", error.response?.data || error.message);
    throw error;
  }
};
