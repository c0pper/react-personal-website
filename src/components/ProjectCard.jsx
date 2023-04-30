import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="mx-5 border border-sky-500 border-s-8 border-s-yellow-600">
      <h2 className="text-white">{project.name.toUpperCase()}</h2>
      <h3 className="text-white">{project.date}</h3>
      <h3 className="text-white">{project.desc}</h3>
      <h3 className="text-white">{project.desc}</h3>
      {project.categories.map((category) =>(
        <h3 className="text-white">{category}</h3>
      ))}
    </div>
  )
}

export default ProjectCard