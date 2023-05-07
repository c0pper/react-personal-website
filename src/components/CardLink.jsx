import React from 'react'

const CardLink = ({title, href}) => {
  return (
    <a href={href} target='_blank'>
        <div className="flex">
            <div className="flex border border-primary items-center justify-center hover:bg-primary transition duration-200">
                <div className="bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </div>
                <div className="text-primary px-2 text-sm hover:text-black transition duration-200">
                    {title}
                </div>
            </div>
        </div>
    </a>
  )
}

export default CardLink