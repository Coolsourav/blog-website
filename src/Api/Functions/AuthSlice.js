// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import axiosInstance from "../../Helper";

// const initialState = {
//   status: "idle",
//   isloggedIn: false,
// };

// export const register = createAsyncThunk("/register", async (formData) => {
//   let response = await axiosInstance.post(`/register`, formData);
//   let resData = response?.data;
//   return resData;
// });
// export const login = createAsyncThunk("/login", async (formdata) => {
//   console.log(formdata);
//   let response = await axiosInstance.post(`/login`, formdata);
//   let resData = response?.data;
//   return resData;
// });
// export const AuthSlice = createSlice({
//   name: "registration",
//   initialState,
//   reducers: {
//     reset_redirectTo: (state, { payload }) => {
//       state.redirectTo = payload;
//     },
//     reset_redirectToo: (state, { payload }) => {
//       state.redirectToo = payload;
//     },
//     check_Token: (state) => {
//       let token = localStorage.getItem("token");
//       if ((token !== null) & (token !== undefined)) {
//         state.isloggedIn = true;
//       }
//     },
//     handleLoggedout: (state) => {
//       localStorage.removeItem("token");
//       state.isloggedIn = false;
//       toast("Logout Sucessfully");
//     },
//     handleRegister: () => {
//       localStorage.removeItem("name");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(register.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         console.log(payload);
//         if (payload?.status === 200) {
//           state.isloggedIn = "true";
//           localStorage.setItem("Name", payload?.data?.name);
//           // localStorage.setItem("image", payload?.data?.profile_pic);
//           toast(payload?.message);
//         } else {
//           if (payload?.status === 201) {
//             toast(payload?.message);
//           }
//         }
//       })
//       .addCase(register.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(login.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = "idle";
//         if (action.payload?.status === 200) {
//           localStorage.setItem("token", action.payload.token);
//           state.isloggedIn = true;
//           toast(action.payload.message);
//         } else {
//           if (action.payload.status === 201) {
//             toast.error(action.payload.message);
//           }
//         }
//       })
//       .addCase(login.rejected, (state, { payload }) => {
//         state.status = "idle";
//         toast.error("Login Unsuccessful");
//       });
//   },
// });
// // export default AuthSlice.reducer;
// export const {handleLoggedout,check_Token} = AuthSlice.actions;
