import React from 'react'

const Skill = ({skill}) => {
  return (
    // <div className="mx-5 border border-sky-500 border-s-8 border-s-yellow-600">
    //   <h2 className="text-white">{skill.name.toUpperCase()}</h2>
    //   <h3 className="text-white">{skill.category}</h3>
    //   <h3 className="text-white">{skill.percent}</h3>
    // </div>
    
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-white">{skill.name.toUpperCase()}</div>
        <div className="text-ll font-medium text-gray-400">{skill.percent}</div>
      </div>
    </div>
  )
}

export default Skill