import { register } from "../../services/auth_api";
import { addUser } from "../users/usersActions";
import { registerUser } from "./authActions";

const registerUserOperation = (user) => async (dispatch) => {
  try {
    const response = await register(user);
    dispatch(registerUser(response.registerData));
    dispatch(addUser({ ...user, id: response.id }));
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export { registerUserOperation };
