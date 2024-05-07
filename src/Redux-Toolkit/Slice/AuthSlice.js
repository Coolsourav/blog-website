import {  createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  isloggedIn: false,
};

export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    reset_redirectToo: (state, { payload }) => {
      state.redirectToo = payload;
    },
    check_Token: (state) => {
      let token = localStorage.getItem("token");
      if ((token !== null) & (token !== undefined)) {
        state.isloggedIn = true;
      }
    },
    handleLoggedout: (state) => {
      localStorage.removeItem("token");
      state.isloggedIn = false;
      toast("Logout Sucessfully");
    },
    handleRegister: () => {
      localStorage.removeItem("name");
    },
  },
});
export const {handleLoggedout,check_Token} = AuthSlice.actions;
export default AuthSlice;