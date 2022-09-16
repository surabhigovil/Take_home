import React from 'react';
import { ProjectsPageProps } from '../App.jsx';
import PieChart from "../components/PieChart.js";  

function StatsPage(props: ProjectsPageProps) {  
  const goodImageCount = props.projects.filter((project) => project.isGoodImage).length;
  const badImageCount = props.projects.filter((project) => !project.isGoodImage).length;

  const userData = {
    labels: ['Good Images', 'Bad Images'],
    datasets: [
      {
        label: "Image statistics",
        data: [goodImageCount, badImageCount],
        backgroundColor: [
          "#50AF95",
          "#F5B041",
          "#F7DC6F",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <PieChart chartData={userData} />
    </div>
  );
}

export default StatsPage;