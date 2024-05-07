import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getServices = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.service);
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
