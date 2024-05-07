import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getComments = async (payload) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.cms.comment}/${payload}`
    );
    return response?.data?.post?.comment?.comments;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
