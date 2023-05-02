import React from 'react'
import Header from '../components/Header'

function About({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id='about'>
      <Header title="About" />
      <div className="flex text-primary font-terminal font-bold text-4xl">
        <div className="mr-2 ">I'm a</div>
        <div 
          className="txt-rotate" 
          data-period="2000" 
          data-rotate='[ "Developer.", "Teacher.", "Translator." ]'
        />
      </div>
    </section>
  )
}

export default About