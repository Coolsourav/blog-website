import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getTeam = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.team);
    return response?.data?.TeamMember;
  } catch (error) {
    console.log("error", error);
  }
};
