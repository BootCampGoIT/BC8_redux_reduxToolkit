import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, signOut } from "../auth/authActions";

export const userReducer = createReducer(
  { email: "", localId: "" },
  {
    [registerUser]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [loginUser]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [signOut]: () => ({ email: "", localId: "" }),
  }
);
