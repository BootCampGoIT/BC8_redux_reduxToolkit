import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/tasks/taskActions";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <TaskListItem {...item} key={item.id} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.items,
  };
};

export default connect(mapStateToProps, { deleteTask: deleteTask })(TaskList);

