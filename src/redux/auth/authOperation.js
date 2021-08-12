import { login, register } from "../../services/auth_api";
import { addUser } from "../users/usersActions";
import { loginUser, registerUser } from "./authActions";

const registerUserOperation = (user) => async (dispatch) => {
  try {
    const response = await register(user);
    dispatch(registerUser(response.registerData));
    dispatch(addUser({ ...user, id: response.id }));
  } catch (error) {
    console.log("error :>> ", error);
  }
};
const loginUserOperation = (user) => async (dispatch) => {
  try {
    const response = await login(user);
 
    dispatch(loginUser(response.loginData));
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export { registerUserOperation, loginUserOperation };
