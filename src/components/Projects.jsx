import React, { useState, useEffect } from 'react'

const Projects = ({ projects, onItemClick }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <div key={project.id} onClick={() => onItemClick(project.id)}>
            <h1>{project.title}</h1>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Projects
