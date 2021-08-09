import { connect } from "react-redux";
import { deleteTask } from "../../../redux/tasks/taskActions";
import { tasksSelector } from "../../../redux/tasks/taskSelectors";
import TaskList from "./TaskList";

const mapStateToProps = (state) => {
  return {
    tasks: tasksSelector(state),
  };
};

export default connect(mapStateToProps, { deleteTask: deleteTask })(TaskList);
