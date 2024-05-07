import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const register = async (payload) => {
  try {
    const response = await axiosInstance.post(endpoints.auth.register, payload);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
