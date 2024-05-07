// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";
// import { toast } from "react-toastify";
// const initialState = {
//   status: "idle",
//   courses: [],
// };

// export const getCourses = createAsyncThunk("/course", async () => {
//   let response = await axiosInstance.get("/course");
//   let resData = response?.data;
//   return resData;
// });
// export const purchesApi = createAsyncThunk(
//   "yourSlice/courseApply",
//   async ({ id, payload }, thunkAPI) => {
//     try {
//       const response = await axiosInstance.post(`/course/apply/${id}`, payload);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const CourseSlice = createSlice({
//   name: "course",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCourses.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getCourses.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         state.courses = payload.Courses;
//       })
//       .addCase(getCourses.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(purchesApi.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(purchesApi.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         toast(payload.message)
//       })
//       .addCase(purchesApi.rejected, (state) => {
//         state.status = "idle";
//       });
//   },
// });
