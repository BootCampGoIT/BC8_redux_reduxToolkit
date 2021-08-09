import React, { Component } from "react";
import TaskForm from "./TaskForm";
import { setFilter } from "../../redux/tasks/taskActions";
import Filter from "../Filter";
import TaskListContainer from "./taskList/TaskListContainer";
import { getTasksOperation } from "../../redux/tasks/tasksOperations";
import { connect } from "react-redux";


class Tasks extends Component {
  state = {};
  componentDidMount() {
    this.props.getTasksOperation();
  }
  render() {
    return (
      <>
        <TaskForm />
        <Filter ident={"tasks"} callBack={setFilter} />
        <TaskListContainer />
      </>
    );
  }
}

export default connect(null, { getTasksOperation })(Tasks);
