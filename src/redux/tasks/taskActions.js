// ======================== toolkit ===================
import { createAction } from "@reduxjs/toolkit";
const addTask = createAction("tasks/addTask");
const deleteTask = createAction("tasks/deleteTask");
const setFilter = createAction("tasks/setFilter");
export { addTask, deleteTask, setFilter };

// ======================== redux ===================
// const ADDTASK = "tasks/addTask";
// const DELETETASK = "tasks/deleteTask";

// const addTask = (newTasks) => ({ type: ADDTASK, payload: newTasks });
// const deleteTask = (id) => ({ type: DELETETASK, payload: id });

// export { addTask, deleteTask };
// export { ADDTASK, DELETETASK };
