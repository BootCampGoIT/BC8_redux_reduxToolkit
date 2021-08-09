// ======================== toolkit ===================
import { createAction } from "@reduxjs/toolkit";
const addTask = createAction("tasks/addTask");
const getTasks = createAction("tasks/getTasks");
const deleteTask = createAction("tasks/deleteTask");
const setFilter = createAction("tasks/setFilter");
const setError = createAction("tasks/setError");
const resetError = createAction("tasks/resetError");
const setLoader = createAction("tasks/setLoader");

export {
  getTasks,
  addTask,
  deleteTask,
  setFilter,
  setError,
  resetError,
  setLoader,
};

// ======================== redux ===================
// const ADDTASK = "tasks/addTask";
// const DELETETASK = "tasks/deleteTask";

// const addTask = (newTasks) => ({ type: ADDTASK, payload: newTasks });
// const deleteTask = (id) => ({ type: DELETETASK, payload: id });

// export { addTask, deleteTask };
// export { ADDTASK, DELETETASK };
