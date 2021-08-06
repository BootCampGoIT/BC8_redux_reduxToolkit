import React from "react";
import TaskForm from "./tasks/TaskForm";
import TaskList from "./tasks/TaskList";
import Filter from "./Filter";
import UsersForm from "./users/UsersForm";
import UsersList from "./users/UsersList";
import { setFilter as setUsersFilter } from "../redux/users/usersActions";
import { setFilter as setTaskFilter } from "../redux/tasks/taskActions";

const App = () => {
  return (
    <>
      <UsersForm />
      <Filter ident='users' callBack={setUsersFilter} />
      <UsersList />
      <hr />
      {/* <TaskForm />
      <Filter ident='tasks' callBack={setTaskFilter} />
      <TaskList /> */}
    </>
  );
};

export default App;
