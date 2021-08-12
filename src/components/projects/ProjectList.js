import React from "react";
import { connect } from "react-redux";
import Tasks from "../tasks/Tasks";
import { ProjectListContainer } from "./ProjectListStyled";

class ProjectList extends React.Component {
  state = {
    currentProject: null,
  };

  addCurrentProjectTasks = () => {
    const newProject = this.props.projects.find(
      (project) => project.id === this.state.currentProject.id
    );
    this.setState({ currentProject: newProject });
  };

  setCurrentProject = (e) => {
    const id = e.target.id;
    const project = this.props.projects.find((project) => project.id === id);
    this.setState({ currentProject: project });
  };
  render() {
    const { currentProject } = this.state;
    return (
      <>
        <ProjectListContainer>
          {this.props.projects.map((project) => (
            <li key={project.id} className='projectItem'>
              Name: {project.name}
              <button
                type='button'
                id={project.id}
                onClick={this.setCurrentProject}>
                Add tasks
              </button>
            </li>
          ))}
        </ProjectListContainer>
        {currentProject && (
          <Tasks
            addCurrentProjectTasks={this.addCurrentProjectTasks}
            projectName={currentProject.name}
            projectId={currentProject.id}
            tasks={currentProject.tasks || []}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectList);
