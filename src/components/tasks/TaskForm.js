import React, { Component } from "react";
import { addTask, deleteTask } from "../../redux/tasks/taskActions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const priorityValues = ["high", "medium", "low"];

const initialState = { taskName: "", priority: priorityValues[0], user: "" };

class TaskForm extends Component {
  state = {
    ...initialState,
    user: this.props.users[0]?.email,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    if (!this.props.users[0]) {
      alert("No users");
      return;
    }
    this.props.addNewTask({
      ...this.state,
      user: !this.state.user ? this.props.users[0]?.email : this.state.user,
      id: uuidv4(),
    });
    this.setState({ ...initialState, user: this.props.users[0]?.email });
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='taskName'
            value={this.state.taskName}
            onChange={this.onHandleChange}
          />
        </label>
        <select name='priority' onChange={this.onHandleChange}>
          {priorityValues.map((item) => (
            <option value={item} key={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
        <select name='user' onChange={this.onHandleChange}>
          <option value='no user'>your choice</option>
          {this.props.users.map((item) => (
            <option value={item.email} key={item.id}>
              {item.email}
            </option>
          ))}
        </select>
        <button type='submit'>Add task</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.items,
  };
};

// const mapDispatchToProps = { addTask };

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (task) => {
      dispatch(addTask(task));
    },

    deleteTask: (id) => {
      dispatch(deleteTask(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
