import React from 'react'
import Header from '../components/Header'
import StickySection from '../components/StickySection'

function About({sectionColor}) {
  return (
    <StickySection>
      <section className={`section ${sectionColor}`} id='about'>
        <Header title="About" />
        <div className="typing-txt-wrapper">
          <div className="static-txt">I'm a</div>
          <ul className="dynamic-txts">
            <li><span>Developer</span></li>
            <li><span>Teacher</span></li>
            <li><span>Translator</span></li>
          </ul>
        </div>
      </section>
    </StickySection>
  )
}

export default About