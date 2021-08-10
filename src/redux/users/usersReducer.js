import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signOut } from "../auth/authActions";

import {

  addUser,
  deleteUser,
  getAllUsers,
  resetError,
  setError,
  setFilter,
  setLoader,
} from "./usersActions";

const itemsReducer = createReducer([], {
  [getAllUsers]: (_, { payload }) => payload,
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [signOut]: () => [],
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
  [signOut]: () => "",
});
const isLoadingReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
  [signOut]: () => "",
});

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,

});

export default usersReducer;

// ================================= redux ================================

// import { combineReducers } from "redux";
// import { ADDUSER, DELETEUSER, SETFILTER } from "./usersActions";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDUSER:
//       return [...state, action.payload];
//     case DELETEUSER:
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETFILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const usersReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default usersReducer;
