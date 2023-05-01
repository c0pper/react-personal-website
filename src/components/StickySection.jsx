import React from 'react'

const StickySection = ({children}) => {
  return (
    // <div className="sticky top-0 flex flex-col">
    <div className="sticky flex flex-col">
        {children}
    </div>
  )
}

export default StickySection