import React from 'react'

const ExperienceCard = ({experience}) => {
  return (
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-white">{experience.name.toUpperCase()}</div>
        <div className="text-ll font-medium text-gray-400">{experience.start_time} - {experience.end_time}</div>
        <div className="flex">
          <a href={experience.institution.url} target='_blank' className="text-ll font-medium text-gray-400">{experience.institution.name}</a>
          <div className="text-ll font-medium text-gray-400 mx-4">|</div>
          <div className="text-ll font-medium text-gray-400">{experience.place}</div>
        </div>
      </div>
      <ul>
        {experience.points.map((point, index) => (
          <li key={index} className="mt-2 text-white">{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard