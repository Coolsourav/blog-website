import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getCourses = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.course);
    return response?.data?.Courses;
  } catch (error) {
    console.log(" error", error);
  }
};
