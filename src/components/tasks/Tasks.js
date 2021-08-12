import React, { Component } from "react";
import TaskForm from "./TaskForm";

import { getTasksOperation } from "../../redux/tasks/tasksOperations";
import { connect } from "react-redux";
import { TasksContainer } from "./TasksStyled";

class Tasks extends Component {
  state = {};
  componentDidMount() {
    // this.props.getTasksOperation();
  }

  // taskName: "", priority: priorityValues[0], user: ""
  render() {
    return (
      <TasksContainer>
        <div>
          <h2>{this.props.projectName}</h2>
          <TaskForm projectId={this.props.projectId} addCurrentProjectTasks={this.props.addCurrentProjectTasks}/>
        </div>
        <ul className='taskList'>
          {this.props.tasks.map((task) => (
            <li key={task.id}>
              <h3>Name {task.taskName}</h3>
              <p>Priority{task.priority}</p>
            </li>
          ))}
        </ul>
      </TasksContainer>
    );
  }
}

export default connect(null, { getTasksOperation })(Tasks);
