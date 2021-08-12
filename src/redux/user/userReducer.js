import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, signOut } from "../auth/authActions";
import { getUserInfo } from "./userActions";

export const userReducer = createReducer(
  { email: "", localId: "", displayName: "" },
  {
    [registerUser]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
      displayName: payload.displayName,
    }),
    [loginUser]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
      displayName: payload.displayName,
    }),
    [getUserInfo]: (_, { payload }) => payload,
    [signOut]: () => ({ email: "", localId: "" }),
  }
);
