import React from 'react'

const Header = ({title}) => {
  return (
    <div className="flex mb-4">
      <div className="flex text-primary font-bold text-3xl mr-4">//</div>
      <div className="flex text-transparent font-terminal font-bold text-4xl">
        <div className="mr-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500" style={{backgroundClip: "text", WebkitBackgroundClip: "text",}}>{title}</div>
        <div className="blinking-cursor">0</div>
      </div>
    </div>
  )
}

export default Header