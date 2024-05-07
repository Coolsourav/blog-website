import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getBlogByCategory = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.cms.categoryPost}/${payload}`
    );
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
