import { addTask, getTasks } from "../../services/tasks_api";
import {
  setError,
  setLoader,
  getTasks as getTaskActionCreator,
  addTask as addTaskActionCreator,
} from "./taskActions";

const getTasksOperation = () => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const tasks = await getTasks();
    dispatch(getTaskActionCreator(tasks));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoader());
  }
};
const addTasksOperation = (task) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await addTask(task);
    dispatch(addTaskActionCreator(response));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoader());
  }
};

export { getTasksOperation, addTasksOperation };
