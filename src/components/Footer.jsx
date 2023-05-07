import React from 'react'
import bio from "../data/bio.json"

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex flex-col items-center md:flex-row mb-4">
        {bio.social.map((el, index) => (
          <a key={index} className={`text-secondary ${index !== bio.social.length -1 ? "md:mr-10" : undefined} md:mb-0 mb-4`}  href={el.url} target='_blank'>{el.title.toUpperCase()}</a>
        ))}
      </div>
      <p>Simone Martin Marotta</p>
    </div>
  )
}

export default Footer