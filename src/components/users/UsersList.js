import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux/users/usersActions";

const UsersList = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <h2>Name: {item.name}</h2>
          <p>Email: {item.email}</p>
          <button onClick={() => deleteUser(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.items.filter(({ name, email }) =>
      [name, email].some((item) =>
        item.toLowerCase().includes(state.users.filter.toLowerCase())
      )
    ),
  };
};

export default connect(mapStateToProps, { deleteUser })(UsersList);
