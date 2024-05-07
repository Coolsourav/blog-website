import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.showallcategory);
    return response?.data?.data;
  } catch (error) {
    console.log("error", error);
  }
};
