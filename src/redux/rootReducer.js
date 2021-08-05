import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/taskReducer";
import usersReducer from "./users/usersReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const usersPersistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['items']

  // key: 'users',
  // storage: storage,
  // blacklist: ['error']
}


const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: persistReducer(usersPersistConfig, usersReducer),
  // auth: () => ({ isAuth: false, token: "lgfdfhgjhkkjhgh" }),
});

export default rootReducer;
