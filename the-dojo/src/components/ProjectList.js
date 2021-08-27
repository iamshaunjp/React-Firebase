// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  console.log(projects)
  
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div> 
      ))}
    </div>
  )
}
