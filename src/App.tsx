import React, { useState, useEffect } from 'react';
import { projectAPI } from './projects/projectAPI';
import './App.css';
import { Project } from './projects/Project';
import ProjectsPage from './projects/ProjectsPage';
import StatsPage from './statistics/StatsPage';
import { MOCK_PROJECTS } from './projects/MockProjects';

export interface ProjectsPageProps {
  projects: Project[];
  onUpdated?: any;
}

function App() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  return (
    <div className="article-container">
      <div className="article">
        <h1>Images</h1>
        <ProjectsPage projects={projects} onUpdated={setProjects}/>
      </div>
      <div className="article">
        <h1>Statistics</h1>
        <StatsPage projects={projects} />
      </div>
    </div>
  );
}

export default App;
