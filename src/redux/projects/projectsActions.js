import { createAction } from "@reduxjs/toolkit";

const addNewProject = createAction("projects/addNewProject");
const getProjectsBYUID = createAction("projects/getProjectsBYUID");
const addTask = createAction("projects/addTask");

export { addNewProject, getProjectsBYUID };
