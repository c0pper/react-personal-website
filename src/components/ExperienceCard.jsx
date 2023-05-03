import React from 'react'

const ExperienceCard = ({experience}) => {
  return (
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-primary mb-6">{experience.name.toUpperCase()}</div>
        <div className="indent-border-left">
          <div className="text-ll font-medium text-secondary">{experience.start_time.split("-")[0]} - {experience.end_time.split("-")[0]}</div>
          <div className="lg:flex mb-2">
            <a href={experience.institution.url} target='_blank' className="text-ll font-medium text-secondary">{experience.institution.name}</a>
            <div className="lg:block hidden text-ll font-medium text-secondary mx-4">|</div>
            <div className="text-ll font-medium text-secondary lg:border-0">{experience.place}</div>
          </div>
        </div>
      </div>
      <ul className="mb-4">
        {experience.points.map((point, index) => (
          <div className="flex items-center mt-2 ml-6">
            <div className="text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <li key={index} className=" text-primary">{point}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard