// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";

// const initialState = {
//   status: "idle",
//   banners: [],
//   services: [],
//   testimonials: [],
// };
// export const getBanners = createAsyncThunk("/banner", async () => {
//   let response = await axiosInstance.get("/banner");
//   let resData = response?.data;
//   return resData;
// });
// export const getServices = createAsyncThunk("/service", async () => {
//   let response = await axiosInstance.get("/service");
//   let resData = response?.data;
//   return resData;
// });
// export const getTestimonial = createAsyncThunk("/testimonial", async () => {
//   let response = await axiosInstance.get("/testimonial");
//   let resData = response?.data;
//   return resData;
// });

// export const HomeSlice = createSlice({
//   name: "home",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getBanners.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getBanners.fulfilled, (state, { payload }) => {
//         state.banners = payload.bannerdata;
//         state.status = "idle";
//       })
//       .addCase(getBanners.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getServices.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getServices.fulfilled, (state, { payload }) => {
//         state.services = payload.data;
//         state.status = "idle";
//       })
//       .addCase(getServices.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getTestimonial.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getTestimonial.fulfilled, (state, { payload }) => {
//         state.testimonials = payload.testimonials;
//         state.status = "idle";
//       })
//       .addCase(getTestimonial.rejected, (state) => {
//         state.status = "idle";
//       });
//   },
// });
