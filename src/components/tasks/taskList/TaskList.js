import React from "react";
import TaskListItem from "../TaskListItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <TaskListItem {...item} key={item.id} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
