import React from 'react'
import bio from "../data/bio.json"

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <div className="flex mb-4">
        {bio.social.map((el, index) => (
          <a className={`text-secondary ${index !== bio.social.length -1 ? "mr-10" : undefined}`}  href={el.url} target='_blank'>{el.title.toUpperCase()}</a>
        ))}
      </div>
      <p>Simone Martin Marotta</p>
    </div>
  )
}

export default Footer