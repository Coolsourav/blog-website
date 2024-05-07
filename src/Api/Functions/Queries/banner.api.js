import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const Banner = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.banner);
    return response?.data?.bannerdata;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
