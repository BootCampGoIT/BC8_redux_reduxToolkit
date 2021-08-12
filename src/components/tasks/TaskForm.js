import React, { Component } from "react";

import { connect } from "react-redux";
import { addTaskOperation } from "../../redux/projects/projectsOperations";

import { addTasksOperation } from "../../redux/tasks/tasksOperations";
import { projectUsers } from "../../redux/users/userSelectors";

const priorityValues = ["high", "medium", "low"];

const initialState = { taskName: "", priority: priorityValues[0], user: "" };

class TaskForm extends Component {
  state = {
    ...initialState,
    // user: this.props.users[0]?.email,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    // if (!this.props.users[0]) {
    //   alert("No users");
    //   return;
    // }

    this.props
      .addTaskOperation(this.props.projectId, this.state)
      .then(() => this.props.addCurrentProjectTasks());

    // this.props.addTasksOperation({
    //   ...this.state,
    //   user: !this.state.user ? this.props.users[0]?.email : this.state.user,
    // });
    this.setState({ ...initialState });
  };

  render() {
    return (
      <>
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
          {/* <select name='user' onChange={this.onHandleChange}>
            <option value='no user'>your choice</option>
            {this.props.users.map((item) => (
              <option value={item.email} key={item.id}>
                {item.email}
              </option>
            ))}
          </select> */}
          <button type='submit'>Add task</button>
        </form>
      </>
    );
  }
}

export default connect(null, { addTaskOperation })(TaskForm);
