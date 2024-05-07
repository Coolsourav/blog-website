import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const createcomment = async ({ id, payload }) => {
  try {
    const response = await axiosInstance.post(
      `${endpoints.cms.createComment}/${id}/comment/create`,payload
    );
    // console.log(response.data.data)
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
