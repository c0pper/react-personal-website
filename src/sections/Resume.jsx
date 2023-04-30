import React from 'react'
import Header from '../components/Header'
import experiences from "../data/website_experience.json"
import Experience from '../components/Experience'

function Resume() {
  return (
    <section className="section" id="resume">
      <Header title="Resume" />
      <div className="flex">
        {experiences.map((experience) => (
          <Experience experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Resume