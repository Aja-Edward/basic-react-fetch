import React, { useState, useEffect } from 'react'
import { projects as projectsData } from './components/data'
import Projects from './components/Projects'
import './App.css'
import MyNav from './components/Nav'
import { Footer } from './components/Footer'
import HeroPage from './components/HeroPage'
import ProjectsDetail from './components/ProjectsDetail'

function App() {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    // Fetch the data here
    setProjects(projectsData)
  }, [])

  const handleProjectClick = (projectId) => {
    const project = projects.find((item) => item.id === projectId)
    setSelectedProject(project)
  }

  return (
    <div className='App'>
      <div className='announcement-container'>
        <h1>Mr Edward teching Mr. Mustapha</h1>
      </div>
      <MyNav />
      <HeroPage />
      <Projects projects={projects} onItemClick={handleProjectClick} />
      <ProjectsDetail project={selectedProject} />

      <Footer />
    </div>
  )
}

export default App
