import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tasks from "../tasks/Tasks";
import { ProjectListContainer } from "./ProjectListStyled";

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);
  const [currentProject, setProject] = useState(null);

  const addCurrentProjectTasks = () => {
    const newProject = projects.find(
      (project) => project.id === currentProject.id
    );
    setProject(newProject);
  };

  const setCurrentProject = (e) => {
    const id = e.target.id;
    const project = projects.find((project) => project.id === id);
    setProject(project);
  };
  return (
    <>
      <ProjectListContainer>
        {projects.map((project) => (
          <li key={project.id} className='projectItem'>
            Name: {project.name}
            <button type='button' id={project.id} onClick={setCurrentProject}>
              Add tasks
            </button>
          </li>
        ))}
      </ProjectListContainer>
      {currentProject && (
        <Tasks
          addCurrentProjectTasks={addCurrentProjectTasks}
          projectName={currentProject.name}
          projectId={currentProject.id}
          tasks={currentProject.tasks || []}
        />
      )}
    </>
  );
};

export default ProjectList;
