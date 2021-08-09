import { tasks } from "./taskVariables";

const tasksSelector = (state) => {
  return state.tasks.items;
};

export { tasksSelector };
