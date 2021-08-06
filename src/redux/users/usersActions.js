import { createAction } from "@reduxjs/toolkit";
const addUser = createAction("users/addUser");
const deleteUser = createAction("users/deleteUser");
const getAllUsers = createAction("users/getUsers")
const setFilter = createAction("users/setFilter");
const setError = createAction("users/setError");
const resetError = createAction("users/resetError");
const setLoader = createAction("users/setLoader");
export { addUser, deleteUser, setFilter, setError, resetError, setLoader, getAllUsers };

// ============================== redux =============================
// const ADDUSER = "users/addUser";
// const DELETEUSER = "users/deleteUser";

// const addUser = (user) => ({
//   type: ADDUSER,
//   payload: user,
// });

// const deleteUser = (id) => ({
//   type: DELETEUSER,
//   payload: id,
// });

// export { ADDUSER, DELETEUSER };
// export { addUser, deleteUser };

// const SETFILTER = "users/setFilter";

// const setFilter = (value) => ({
//   type: SETFILTER,
//   payload: value,
// });

// export { SETFILTER };
// export { setFilter };
