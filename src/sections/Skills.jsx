import React from 'react'
import skills from "../data/website_skill.json"
import Header from '../components/Header'
import Skill from '../components/Skill'
import StickySection from '../components/StickySection'

function Skills({sectionColor}) {
  return (
    <StickySection>
      <section className={`section ${sectionColor}`} id="skills">
        <Header title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-gap">
          {skills.map((skill) => (
            <div className="col-span-1">
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </section>
    </StickySection>
  )
}

export default Skills