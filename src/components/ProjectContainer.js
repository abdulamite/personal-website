import React from 'react';
import Project from './Project';
import projects from '../resources/projects.json';

export default function ProjectContainer() {
    const projectList = projects.projects;
    return (
        <div className="projects">
          <h2>🏗 Projects: </h2>
          {projectList.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
    )
}
