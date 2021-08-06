import axios from "axios";

const baseURL = `https://shopbc8-30b11-default-rtdb.firebaseio.com`;

export const getUsers = async () => {
  try {
    const response = await axios.get(baseURL + "/users.json");
    // console.log("response :>> ", response);
    const res = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    return res;
  } catch (error) {
    throw new Error(error.response.status);
    // throw new Error(error);
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(baseURL + "/users.json", user);
    console.log('response :>> ', response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(baseURL + `/users/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};
