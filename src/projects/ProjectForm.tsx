import { Project } from './Project';
import React, { SyntheticEvent, useState } from 'react';

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({ project: initialProject, onSave, onCancel }: ProjectFormProps) {
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState({
      name: '',
    });
    
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
        onSave(project);
        console.log(project);
    };

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;
        const change = {
            [name]: updatedValue,
        };
        
        let updatedProject: Project;
        setProject((p) => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        });

        setErrors(() => validate(updatedProject));
    };

    function validate(project: Project) {
      let errors: any = { name: '' };
      if (project.name.length === 0) {
        errors.name = 'Name is required';
      }
      return errors;
    }

    function isValid() {
      return (
        errors.name.length === 0
      );
    }
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Image Name</label>
      <input type="text" name="name" placeholder="enter image name" value={project.name} onChange={handleChange}/>
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" checked={project.isActive} onChange={handleChange}/>
      <label htmlFor="isGoodImage">isGoodImage?</label>
      <input type="checkbox" name="isGoodImage" checked={project.isGoodImage} onChange={handleChange}/>
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;