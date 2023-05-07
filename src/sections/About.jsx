import React, {useState, useEffect} from 'react'
import bio from "../data/bio.json"

function About({sectionColor}) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import("../assets/line-portrait.png").then(image => setImageSrc(image.default));/* @vite-ignore */
  }, ["../assets/line-portrait.png"]);


  return (
    <section className={`section ${sectionColor} md:min-h-screen flex relative`} id='about'>
      <div className="flex flex-col md:items-center md:flex-row-reverse justify-between">
        <div  id="portrait">
          <img src={imageSrc} className="object-fit" />
        </div>
        
        <div id="text" className="md:w-3/6">
          <h1 className="flex font-bold text-4xl md:text-6xl mb-4 md:mt-0 mt-4 font-unicaone">
            {bio.name}
          </h1>
          <div 
            className="flex font-terminal font-bold text-4xl mb-4" 
            style={{
              color: "transparent"
            }}
          >
            <div className="mr-2 accent-gradient" style={{backgroundClip: "text", WebkitBackgroundClip: "text",}}>I'm a</div>
            <div
              className="txt-rotate accent-gradient mr-2" style={{backgroundClip: "text", WebkitBackgroundClip: "text",}}
              data-period="2000"
              data-rotate='[ "Developer.", "Teacher.", "Translator." ]'
            />
            <div className="blinking-cursor">0</div>
          </div>
          <div className="indent-border-left">
            {bio.text.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          <div className="text-white absolute bottom-5 left-1/2 hidden md:block animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About