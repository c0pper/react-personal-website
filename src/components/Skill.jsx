import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-primary">{skill.name.toUpperCase()}</div>
        <div className="text-ll font-medium text-gray-400">{skill.percent}</div>
      </div>
    </div>
  )
}

export default Skill