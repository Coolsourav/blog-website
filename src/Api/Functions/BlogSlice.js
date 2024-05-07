// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../../Helper";
// import { toast } from "react-toastify";
// const initialState = {
//   status: "idle",
//   blogs: [],
//   categories: [],
//   recentBlogs: [],
//   singleBlog: {},
//   comments:[]
// };

// export const getBlogs = createAsyncThunk("/allBlog", async () => {
//   let response = await axiosInstance.get("/allBlog");
//   let resData = response?.data;
//   return resData;
// });
// export const getCategories = createAsyncThunk("/showallcategory", async () => {
//   let response = await axiosInstance.get("/showallcategory");
//   let resData = response?.data;
//   return resData;
// });
// export const searchBlog = createAsyncThunk("/search/input", async (input) => {
//   let response = await axiosInstance.get(`/search/${input}`);
//   let resData = response?.data;
//   return resData;
// });
// export const getBlogByCategory = createAsyncThunk(`/category/post/id`, async (id) => {
//   let response = await axiosInstance.get(`/category/post/${id}`);
//   let resData = response?.data;
//   return resData;
// });
// export const getrecentBlogs = createAsyncThunk("/letest-post", async () => {
//   let response = await axiosInstance.get("/letest-post");
//   let resData = response?.data;
//   return resData;
// });
// export const singleProduct = createAsyncThunk("/blogdetails/id", async (id) => {
//   let response = await axiosInstance.get(`/blogdetails/${id}`);
//   let data = response?.data;
//   return data;
// });
// export const getComments = createAsyncThunk("/comment/id", async (id) => {
//   let response = await axiosInstance.get(
//     `/comment/${id}`
//   );
//   let data = response?.data;
//   return data;
// });
// export const createcomment = createAsyncThunk(
//   "comment/create",
//   async ({ id, payload }, thunkAPI) => {
//     try {
//       const response = await axiosInstance.post(
//         `blog/${id}/comment/create`,
//         payload
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );
// export const BlogSlice = createSlice({
//   name: "blog",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getBlogs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getBlogs.fulfilled, (state, { payload }) => {
//         state.blogs = payload.data;
//         state.status = "idle";
//       })
//       .addCase(getBlogs.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getCategories.pending, (state) => {
//         state.status = "pending";
//       })
//       .addCase(getCategories.fulfilled, (state, { payload }) => {
//         state.categories = payload.data;
//         state.status = "idle";
//       })
//       .addCase(getCategories.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(searchBlog.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(searchBlog.fulfilled, (state, { payload }) => {
//         state.blogs = payload;
//         state.status = "idle";
//       })
//       .addCase(searchBlog.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getBlogByCategory.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getBlogByCategory.fulfilled, (state, { payload }) => {
//         state.blogs = payload.data;
//         state.status = "idle";
//       })
//       .addCase(getBlogByCategory.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getrecentBlogs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getrecentBlogs.fulfilled, (state, { payload }) => {
//         state.recentBlogs = payload.data;
//         state.status = "idle";
//       })
//       .addCase(getrecentBlogs.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(singleProduct.pending, (state, { payload }) => {
//         state.status = "loading";
//       })
//       .addCase(singleProduct.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         state.singleBlog = payload.data;
//       })
//       .addCase(singleProduct.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(getComments.pending, (state, { payload }) => {
//         state.status = "loading";
//       })
//       .addCase(getComments.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         state.comments = payload.post.comment.comments;
//       })
//       .addCase(getComments.rejected, (state) => {
//         state.status = "idle";
//       })
//       .addCase(createcomment.pending, (state, { payload }) => {
//         state.status = "loading";
//       })
//       .addCase(createcomment.fulfilled, (state, { payload }) => {
//         state.status = "idle";
//         toast(payload.message)
//       })
//       .addCase(createcomment.rejected, (state) => {
//         state.status = "idle";
//       });
//   },
// });
