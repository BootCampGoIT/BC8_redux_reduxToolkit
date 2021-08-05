import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  addUser,
  deleteUser,
  resetError,
  setError,
  setFilter,
} from "./usersActions";

const itemsReducer = createReducer([], {
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
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
