import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const purchesApi = async ({ id, payload }) => {
  try {
    const response = await axiosInstance.post(
      `${endpoints.cms.courseApply}/${id}`,
      payload
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};
