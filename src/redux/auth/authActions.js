import { createAction } from "@reduxjs/toolkit";

const registerUser = createAction("auth/registerUser");
const loginUser = createAction("auth/loginUser");
const signOut = createAction("auth/signOut");

export { registerUser, loginUser, signOut };
