import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getrecentBlogs = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.letestPost);
    return response?.data?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
