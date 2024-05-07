import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";


export const login = async (payload) => {
  try {
    const response = await axiosInstance.post(endpoints.auth.login, payload);
    localStorage.setItem("token", response.data.token);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
