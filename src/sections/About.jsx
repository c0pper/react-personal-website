import React, {useState, useEffect} from 'react'
import bio from "../data/bio.json"

function About({sectionColor}) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import("../assets/line-portrait.png").then(image => setImageSrc(image.default));/* @vite-ignore */
  }, ["../assets/line-portrait.png"]);


  return (
    <section className={`section ${sectionColor}`} id='about'>
      <div className="flex flex-col md:items-center md:flex-row-reverse justify-between">
        <div className="w-full" id="portrait">
          <img src={imageSrc} className="object-fit" />
        </div>
        <div id="text">
          <h1 className="flex font-bold text-4xl md:text-6xl mb-4 md:mt-0 mt-4">
            {bio.name}
          </h1>
          <div 
            className="flex font-terminal font-bold text-4xl mb-4" 
            style={{
              color: "transparent"
            }}
          >
            <div className="mr-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500" style={{backgroundClip: "text", WebkitBackgroundClip: "text",}}>I'm a</div>
            <div
              className="txt-rotate bg-gradient-to-r from-cyan-500 to-fuchsia-500 mr-2" style={{backgroundClip: "text", WebkitBackgroundClip: "text",}}
              data-period="2000"
              data-rotate='[ "Developer.", "Teacher.", "Translator." ]'
            />
            <div className="blinking-cursor">0</div>
          </div>
          <div className="indent-border-left">
            {bio.text.map((paragraph) => (
              <p className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About