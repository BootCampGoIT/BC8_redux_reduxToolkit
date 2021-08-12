import { createReducer } from "@reduxjs/toolkit";
import { signOut } from "../auth/authActions";
import { addTask } from "../tasks/taskActions";
import { addNewProject, getProjectsBYUID } from "./projectsActions";

// {projectId, task:{id, name, user, priority}}

const projectsReducer = createReducer([], {
  [addNewProject]: (state, { payload }) => [...state, payload],
  [getProjectsBYUID]: (_, { payload }) => payload,
  [addTask]: (state, { payload }) =>
    state.map((project) =>
      project.id === payload.projectId
        ? { ...project, tasks: project?.tasks?.length ? [...project.tasks, payload.task] : [payload.task] }
        : project
    ),
  [signOut]: () => [],
});

export default projectsReducer;
