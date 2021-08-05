import React from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter";
import UsersForm from "../components/users/UsersForm";
import UsersList from "../components/users/UsersList";
import { setFilter } from "../redux/users/usersActions";

const UsersPage = ({ setFilter }) => {
  return (
    <>
      <UsersForm />
      <Filter ident='users' callBack={setFilter} />
      <UsersList />
    </>
  );
};

export default connect(null, { setFilter })(UsersPage);
