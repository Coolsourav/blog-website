import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const blogDetails = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.cms.blogdetails}/${payload}`
    );
    return response?.data?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
