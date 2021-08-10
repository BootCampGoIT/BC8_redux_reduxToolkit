import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskReducer";
import usersReducer from "./users/usersReducer";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
// import { tasks } from "./tasks/taskVariables"; //new

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["idToken", "refreshToken"],

  // key: 'users',
  // storage: storage,
  // blacklist: ['error']
};

const rootReducer = combineReducers({
  // [tasks.key]: tasksReducer, //new
  tasks: tasksReducer,
  projectUsers: usersReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  // users: persistReducer(usersPersistConfig, usersReducer),
  // auth: () => ({ isAuth: false, token: "lgfdfhgjhkkjhgh" }),
});

export default rootReducer;
