import React from "react";

const TaskListItem = ({ id, taskName, priority, user, deleteTask }) => {
  const deleteItem = () => deleteTask(id);
  return (
    <li key={id}>
      <h2>TaskName: {taskName}</h2>
      <p>Priority: {priority}</p>
      <p>User: {user}</p>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default TaskListItem;
