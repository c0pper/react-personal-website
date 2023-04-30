import React from 'react'

const Experience = ({experience}) => {
  return (
    <div className="">
      <h2 className="text-white">{experience.name.toUpperCase()}</h2>
      <h3 className="text-white">{experience.start_time}</h3>
      <h3 className="text-white">{experience.end_time}</h3>
      <h3 className="text-white">{experience.exp_type}</h3>
      <h3 className="text-white">{experience.institution.name}</h3>
      <h3 className="text-white">{experience.place}</h3>
    </div>
  )
}

export default Experience