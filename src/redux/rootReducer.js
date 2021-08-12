import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskReducer";
import usersReducer from "./users/usersReducer";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import projectsReducer from "./projects/projectsReducer";
// import { tasks } from "./tasks/taskVariables"; //new

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["idToken", "refreshToken"],
};
const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["email", "localId", "displayName"],
};

const rootReducer = combineReducers({
  // [tasks.key]: tasksReducer, //new
  tasks: tasksReducer,
  projectUsers: usersReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  projects: projectsReducer,
  // users: persistReducer(usersPersistConfig, usersReducer),
  // auth: () => ({ isAuth: false, token: "lgfdfhgjhkkjhgh" }),
});

export default rootReducer;
