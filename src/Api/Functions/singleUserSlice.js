// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";

// export const singleProduct = createAsyncThunk(
//     '/blogdetails/id', async (id) => {
//         let response = await axiosInstance.get(
//           `/blogdetails/${id}`
//         );
//         let data = response?.data;
//         return data;
//   }
// );
// export const singleProductSlice = createSlice({
//     name: "singleBlog",
//     initialState: {
//         status: "idle",
//         blog: {},
//         reducers:{}
//     },
//     extraReducers: (builder) => {
//         builder
//           .addCase(singleProduct.pending, (state, { payload }) => {
//             state.status = "loading";
//           })
//           .addCase(singleProduct.fulfilled, (state, { payload }) => {
//               state.status = "success";
//               if (state.status === "success") {
//                   state.blog = payload.data;
//               }
//           })
//           .addCase(singleProduct.rejected, (state, { payload }) => {
//             state.status = "failed";
//           });
//     }
// })
// export default singleProductSlice
