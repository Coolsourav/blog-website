import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getBlogs = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.allBlog);

    return response?.data?.data;
  } catch (error) {
    console.log("error", error);
  }
};
