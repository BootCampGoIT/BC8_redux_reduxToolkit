import React from "react";

// import Filter from "./Filter";
// import UsersForm from "./users/UsersForm";
// import UsersList from "./users/UsersList";
// import { setFilter as setUsersFilter } from "../redux/users/usersActions";
// import Tasks from "./tasks/Tasks";
// import Auth from "./auth/Auth";
// import Users from "./users/Users";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Auth /> */}
      {/* <hr /> */}
      {/* <Users /> */}
      {/* <UsersForm />
      <Filter ident='projectUsers' callBack={setUsersFilter} />
      <UsersList /> */}
      {/* <hr /> */}
      {/* <Tasks /> */}
    </>
  );
};

export default App;
