// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";
// const initialState = {
//   status: "idle",
//   team: [],
// };
// export const getTeam = createAsyncThunk("/team", async () => {
//   let response = await axiosInstance.get("/team");
//   let resData = response?.data;
//   return resData;
// });
// export const AboutSlice = createSlice({
//   name: "about",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTeam.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getTeam.fulfilled, (state, { payload }) => {
//           state.status = "idle";
//         //   console.log(payload.TeamMember);
//         state.team = payload.TeamMember;
//       })
//       .addCase(getTeam.rejected, (state) => {
//         state.status = "idle";
//       });
     
//   },
// });