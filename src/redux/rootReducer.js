import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskReducer";
import usersReducer from "./users/usersReducer";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
// import { tasks } from "./tasks/taskVariables"; //new

const usersPersistConfig = {
  key: "projectUsers",
  storage: storage,
  whitelist: ["items"],

  // key: 'users',
  // storage: storage,
  // blacklist: ['error']
};

const rootReducer = combineReducers({
  // [tasks.key]: tasksReducer, //new
  tasks: tasksReducer,
  projectUsers: usersReducer,
  auth: authReducer,
  // users: persistReducer(usersPersistConfig, usersReducer),
  // auth: () => ({ isAuth: false, token: "lgfdfhgjhkkjhgh" }),
});

export default rootReducer;
