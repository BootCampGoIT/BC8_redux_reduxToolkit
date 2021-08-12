import React from "react";
import { getCurrentUserInfo } from "../services/auth_api";

// import Filter from "./Filter";
// import UsersForm from "./users/UsersForm";
// import UsersList from "./users/UsersList";
// import { setFilter as setUsersFilter } from "../redux/users/usersActions";
// import Tasks from "./tasks/Tasks";
// import Auth from "./auth/Auth";
// import Users from "./users/Users";
import Header from "./header/Header";
import Main from "./main/Main";
import { getUserInfo } from "../redux/user/userActions";
import { connect } from "react-redux";

class App extends React.Component {
  // async componentDidMount() {
  //   const userInfo = await getCurrentUserInfo();
  //   this.props.getUserInfo(userInfo);

  //   console.log("userInfo :>> ", userInfo);
  // }
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default connect(null, { getUserInfo })(App);
