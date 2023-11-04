const ProjectsDetail = ({ project }) => {
  return (
    <div>
      <h2>Project Detail</h2>
      {project ? (
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ) : (
        <p>No project selected</p>  
      )}
    </div>
  )
}

export default ProjectsDetail
