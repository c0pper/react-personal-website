import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className=" py-4 px-8 mt-1 border-card">
      <div className="flex flex-col items-start mt-4">
        <div className="text-xl font-medium text-primary mb-4">{skill.name.toUpperCase()}</div>
        <div className="flex w-full h-4 bg-primary border border-primary overflow-hidden">
          <div className="flex flex-col justify-center overflow-hidden bg-black text-xs text-white text-center" role="progressbar" style={{width: `${skill.percent}%`}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">{skill.percent}%</div>
        </div>
      </div>
    </div>
  )
}

export default Skill