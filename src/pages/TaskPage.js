import React from "react";
import { connect } from "react-redux";
import ProjectList from "../components/projects/ProjectList";
import ProjectsForm from "../components/projects/ProjectsForm";
import Tasks from "../components/tasks/Tasks";
import { getProjectsOperation } from "../redux/projects/projectsOperations";

class TaskPage extends React.Component {
  state = { isProjectFormOpen: false };
  componentDidMount() {
    this.props.getProjectsOperation();
  }

  openProjectForm = () => {
    this.setState((prev) => ({ isProjectFormOpen: !prev.isProjectFormOpen }));
  };
  render() {
    const { isProjectFormOpen } = this.state;
    return (
      <>
        <h2>ProjectPage</h2>
        <button type='button' onClick={this.openProjectForm}>
          {isProjectFormOpen ? "Close form" : "Create new project"}
        </button>
        {isProjectFormOpen && <ProjectsForm />}
        <ProjectList />

        {/* <Tasks /> */}
      </>
    );
  }
}

export default connect(null, { getProjectsOperation })(TaskPage);
