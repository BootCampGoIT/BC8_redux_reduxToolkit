import { createReducer } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

const authReducer = createReducer(
  {},
  {
    [registerUser]: (_, { payload }) => payload,
  }
);

export default authReducer;
