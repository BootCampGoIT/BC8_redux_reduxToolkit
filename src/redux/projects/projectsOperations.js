import {
  addProject,
  addTaskByProjectID,
  getProjectsByUID,
} from "../../services/projects_api";
import { addTask } from "../tasks/taskActions";
import { addNewProject, getProjectsBYUID } from "./projectsActions";

const addProjectOperation = (project) => async (dispatch, getState) => {
  const token = getState().auth.idToken;
  const localId = getState().user.localId;
  try {
    const id = await addProject(project, token, localId);
    console.log("id :>> ", id);
    dispatch(addNewProject({ ...project, id }));
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const getProjectsOperation = () => async (dispatch, getState) => {
  const token = getState().auth.idToken;
  const localId = getState().user.localId;

  try {
    const response = await getProjectsByUID(token, localId);
    dispatch(getProjectsBYUID(response));
  } catch (error) {}
};

const addTaskOperation = (projectId, task) => async (dispatch, getState) => {
  const token = getState().auth.idToken;
  const localId = getState().user.localId;
  const id = await addTaskByProjectID(projectId, task, localId, token);

  dispatch(addTask({ projectId, task: { ...task, id } }));
};

export { addProjectOperation, getProjectsOperation, addTaskOperation };
