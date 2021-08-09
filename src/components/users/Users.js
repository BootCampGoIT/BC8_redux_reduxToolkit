import React from "react";
import Button from "./Button";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";

const Users = () => {
  return (
    <>
      <UsersForm />
      <UsersList />
      <Button />
    </>
  );
};

export default Users;
