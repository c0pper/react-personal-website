import React from 'react'
import skills from "../data/website_skill.json"
import Header from '../components/Header'
import Skill from '../components/Skill'

function Skills() {
  return (
    <section className="section" id="skills">
      <Header title="Skills" />
      <div className="flex">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills