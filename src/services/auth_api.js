import axios from "axios";
const API_KEY = "AIzaSyCCN75pWj-NozjmfcEXA1G8_vsgEL5xdLw";
const register_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const login_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const baseURL = `https://shopbc8-30b11-default-rtdb.firebaseio.com`;

const register = async (user) => {
  try {
    const response = await axios.post(register_URL, {
      ...user,
      returnSecureToken: true,
    });
    const addUserToDB = await axios.post(baseURL + "/projectUsers.json", {
      email: user.email,
    });
    return { registerData: response.data, id: addUserToDB.data.name };
  } catch (error) {
    console.log(error);
  }
};
const login = async (user) => {
  try {
    const response = await axios.post(login_URL, {
      ...user,
      returnSecureToken: true,
    });
    return { loginData: response.data };
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
