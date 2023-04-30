import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className="mx-5 border border-sky-500 border-s-8 border-s-yellow-600">
      <h2 className="text-white">{skill.name.toUpperCase()}</h2>
      <h3 className="text-white">{skill.category}</h3>
      <h3 className="text-white">{skill.percent}</h3>
    </div>
  )
}

export default Skill