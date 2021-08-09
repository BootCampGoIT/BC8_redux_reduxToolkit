import axios from "axios";

const baseURL = `https://shopbc8-30b11-default-rtdb.firebaseio.com`;

const getTasks = async () => {
  try {
    const response = await axios.get(baseURL + "/tasks.json");
    if (response.data) {
      return Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
    }
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

const addTask = async (task) => {
  try {
    const response = await axios.post(baseURL + "/tasks.json", task); //{"name":"-MGHGKJ5678-S" }
    return { id: response.data.name, ...task };
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTask = async (id) => {
  try {
    await axios.delete(baseURL + `/tasks/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};

export { addTask, deleteTask, getTasks };
