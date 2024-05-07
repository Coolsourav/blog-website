import axiosInstance from "../../Axios/axiosInstance";
import { endpoints } from "../../Endpoints/endpoints";

export const getTestimonial = async () => {
  try {
    const response = await axiosInstance.get(endpoints.cms.testimonial);
    return response?.data?.testimonials;
  } catch (error) {
    console.log("error", error);
  }
};
