import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, signOut } from "./authActions";

const authReducer = createReducer(
  {
    idToken: "",
    refreshToken: "",
  },
  {
    [registerUser]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [loginUser]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [signOut]: () => ({
      idToken: "",
      refreshToken: "",
    }),
  }
);

export default authReducer;
