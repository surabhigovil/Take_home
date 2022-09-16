import { Project } from './Project';
import React from 'react';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} className="photo"/>
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.isGoodImage ? 'Good Image' : 'Bad Image'}</p>
        <button className=" bordered" onClick={() => {handleEditClick(project);}}>
          <span className="icon-edit"></span>
            Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;