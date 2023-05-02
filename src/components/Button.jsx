import React from 'react'

const Button = ({children}) => {
  return (
    <div className="no-underline bg-primary text-black  hover:bg-black hover:text-white hover:cursor-pointer transition duration-200 p-2">
        {children}
    </div>
  )
}

export default Button