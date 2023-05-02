import React from 'react'

const ExperienceCard = ({experience}) => {
  return (
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-primary mb-6">{experience.name.toUpperCase()}</div>
        <div className="indent-border-left">
          <div className="text-ll font-medium text-secondary">{experience.start_time} - {experience.end_time}</div>
          <div className="lg:flex mb-2">
            <a href={experience.institution.url} target='_blank' className="text-ll font-medium text-secondary">{experience.institution.name}</a>
            <div className="lg:block hidden text-ll font-medium text-secondary mx-4">|</div>
            <div className="text-ll font-medium text-secondary lg:border-0">{experience.place}</div>
          </div>
        </div>
      </div>
      <ul className="mb-4">
        {experience.points.map((point, index) => (
          <li key={index} className="mt-2 ml-6 text-primary">{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard