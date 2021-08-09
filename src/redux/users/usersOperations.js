import { addUser, deleteUser, getUsers } from "../../services/users_api";
import {
  addUser as addUserActionCreator,
  getAllUsers,
  setError,
  setLoader,
  deleteUser as deleteUserByID,
  deleteUserTasks,
} from "./usersActions";

export const addUserOperation = (user) => async (dispatch) => {
  try {
    dispatch(setLoader());
    const res = await addUser(user);
    dispatch(addUserActionCreator({ ...user, id: res.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export const getUsersOperation = () => async (dispatch, getState) => {
  // if (getState().users.items.length) return
  dispatch(setLoader());
  try {
    const res = await getUsers();
    if (res) dispatch(getAllUsers(res));
  } catch (error) {
    if (error.message === "404") {
      dispatch(setError("Resourse not found!"));
    }
    if (Number(error.message) > 500) {
      dispatch(setError("Server not found!"));
    }
  } finally {
    dispatch(setLoader());
  }
};
export const deleteUserOperation =
  (id, email) => async (dispatch, getState) => {
    dispatch(setLoader());
    try {
      await deleteUser(id);
      dispatch(deleteUserTasks(email));
      dispatch(deleteUserByID(id));
    } catch (error) {
      if (error.message === "404") {
        dispatch(setError("Resourse not found!"));
      }
      if (Number(error.message) > 500) {
        dispatch(setError("Server not found!"));
      }
    } finally {
      dispatch(setLoader());
    }
  };
