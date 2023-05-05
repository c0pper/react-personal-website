import React, { useState, useEffect } from 'react'
import CardLink from './CardLink';

const ProjectCard = ({project}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`${project.card_pic}`).then(image => setImageSrc(image.default));/* @vite-ignore */
  }, [project.card_pic]);

  return (    
    <div className=" pl-4 mt-1 border-card mb-10 md:overflow-y-auto">
      <div className="flex md:flex-row flex-col-reverse justify-between">
        <div className="flex-col mr-24 mb-6">
          <div className="flex flex-col items-start mt-4">
            <div className="text-xl font-medium text-primary">{project.name.toUpperCase()}</div>
            <div className="text-ll font-medium text-secondary indent-border-left mt-2 mb-4">{project.date.split("-")[0]}</div>
          </div>
          <CardLink href={project.url} title="Source" />
          <div className="mt-2 mb-4  text-primary">
              {project.desc}
          </div>
          {project.categories.map((cat) => (
            <div className="accent-gradient rounded-full p-1 text-xs text-primary inline mr-2">{cat}</div>
          ))}          
        </div>
        <img className="md:w-28 md:h-28 object-cover border-[1px] border-primary" src={imageSrc} />
      </div>
    </div>
  )
}

export default ProjectCard