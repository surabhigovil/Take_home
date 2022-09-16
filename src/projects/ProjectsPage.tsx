import React, { useState } from 'react';
import ProjectList from './ProjectList';
import { Project } from './Project';    
import { ProjectsPageProps } from '../App';


function ProjectsPage(props: ProjectsPageProps) {
    const saveProject = (project: Project) => {
        let updatedProjects = props.projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        // setProjects(updatedProjects);
        props.onUpdated(updatedProjects);
    };

    return (
      <>
        <ProjectList onSave={saveProject} projects={props.projects} />
      </>
    );
}

export default ProjectsPage;    