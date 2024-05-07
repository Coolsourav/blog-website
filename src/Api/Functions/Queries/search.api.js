import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";


export const productdetails = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.cms.search}/${payload}`
    );
    // console.log(response.data.data)
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
