import React from 'react'

const Button = ({children, additionalCSS = ""}) => {
  return (
    <div className={`no-underline bg-primary hover:border-primary  hover:bg-black hover:text-white hover:cursor-pointer transition duration-200 p-2 ${additionalCSS}`}>
        {children}
    </div>
  )
}

export default Button