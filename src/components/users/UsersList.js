import React from "react";
import { connect } from "react-redux";
import { addCount } from "../../redux/users/usersActions";
import {
  memoizeUsersSelector,
  usersSelector,
} from "../../redux/users/userSelectors";
import { deleteUserOperation } from "../../redux/users/usersOperations";

const UsersList = ({ users, deleteUserOperation }) => {
  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <h2>Name: {item.name}</h2>
            <p>Email: {item.email}</p>
            <button onClick={() => deleteUserOperation(item.id, item.email)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // users: usersSelector(state),
    users: memoizeUsersSelector(state),
  };
};

export default connect(mapStateToProps, { deleteUserOperation })(UsersList);
