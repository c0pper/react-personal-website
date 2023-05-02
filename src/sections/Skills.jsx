import React from 'react'
import skills from "../data/website_skill.json"
import Header from '../components/Header'
import Skill from '../components/Skill'
import SectionContent from '../components/SectionContent'

function Skills({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id="skills">
      <Header title="Skills" />
      <SectionContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-gap">
          {skills.map((skill) => (
            <div className="col-span-1">
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </SectionContent>
    </section>
  )
}

export default Skills