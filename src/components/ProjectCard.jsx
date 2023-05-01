import React from 'react'

const ProjectCard = ({project}) => {
  return (
    // <div className="mx-5 border border-sky-500 border-s-8 border-s-yellow-600">
    //   <h2 className="text-white">{project.name.toUpperCase()}</h2>
    //   <h3 className="text-white">{project.date}</h3>
    //   <h3 className="text-white">{project.desc}</h3>
    //   <h3 className="text-white">{project.desc}</h3>
    //   {project.categories.map((category) =>(
    //     <h3 className="text-white">{category}</h3>
    //   ))}
    // </div>

    
    <div className=" py-4 px-8 bg-white mt-1">
    <div className="flex flex-col items-start mt-4">
      <div className="text-xl font-medium text-gray-600">{project.name.toUpperCase()}</div>
      <div className="text-ll font-medium text-gray-400">{project.date}</div>
    </div>
    <div className="mt-2 text-gray-600">
        {project.desc}
    </div>
    </div>
  )
}

export default ProjectCard