// ======================== toolkit ===================
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { deleteUserTasks } from "../users/usersActions";
import { addTask, deleteTask, getTasks, setFilter } from "./taskActions";

const itemsReducer = createReducer([], {
  [addTask]: (state, { payload }) => [...state, payload],
  [deleteTask]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getTasks]: (_, { payload }) => payload,
  [deleteUserTasks]: (state, { payload }) =>
    state.map((task) =>
      task.user.email === payload.email ? { ...task, user: "no user" } : task
    ),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const tasksReducer = createReducer(initialState, {
//   [addTask]: (state, action) => ({
//     ...state,
//     items: [...state.items, action.payload],
//   }),
//   [deleteTask]: (state, action) => ({
//     ...state,
//     items: state.items.filter((item) => item.id !== action.payload),
//   }),
// });

export default tasksReducer;

// ======================== redux ===================
// import { ADDTASK, DELETETASK } from "./taskActions";

// const initialState = {
//   items: [],
//   filter: "Hello",
// };

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADDTASK:
//       return { ...state, items: [...state.items, action.payload] };

//     case DELETETASK:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };

// export default tasksReducer;
