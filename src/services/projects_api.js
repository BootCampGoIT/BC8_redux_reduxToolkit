import axios from "axios";

const baseURL = `https://shopbc8-30b11-default-rtdb.firebaseio.com`;

const addProject = async (project, token, localId) => {
  try {
    const response = await axios.post(
      baseURL + `/projects/${localId}.json?auth=${token}`,
      project
    );
    return response.data.name; //id
  } catch (error) {
    console.log(error);
  }
};

const getProjectsByUID = async (token, localId) => {
  try {
    const response = await axios.get(
      baseURL + `/projects/${localId}.json` //?auth=${token}
    );
    const data = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    console.log("data :>> ", data);

    return data.map((project) => ({
      ...project,
      tasks: project.tasks
        ? Object.keys(project.tasks).map((taskKey) => ({
            id: taskKey,
            ...project.tasks[taskKey],
          }))
        : [],
    }));

    //   tasks: Object.keys(response.data[key].tasks).map((taskKey) => ({
    //     id: taskKey,
    //     ...response.data[key].tasks[taskKey],
    //   })),
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const addTaskByProjectID = async (projectID, task, localId, token) => {
  try {
    const response = await axios.post(
      baseURL + `/projects/${localId}/${projectID}/tasks.json?auth=${token}`,
      task
    );
    return response.data.name; //id
  } catch (error) {}
};

export { addProject, getProjectsByUID, addTaskByProjectID };

// const tasks = { fghjk: { name: "" }, fghjk2: { name: "" } };


// console.log(tasks["fghjk"]);

// const result = Object.keys(tasks).map(key=>({id:key, ...tasks[key] }))
// //["fghjk", "fghjk2"].

// const res = [
//   { id: "fghjk", name: "" },
//   { id: "fghjk2", name: "" },
// ];
