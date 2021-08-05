import TasksPage from "../pages/TasksPage";
import UsersPage from "../pages/UsersPage";

const mainRoutes = [
  {
    name: "users",
    path: "/users",
    component: UsersPage,
    exact: true,
  },
  {
    name: "tasks",
    path: "/tasks",
    component: TasksPage,
    exact: true,
  },
];

export default mainRoutes;
