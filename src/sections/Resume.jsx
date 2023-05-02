import React from 'react'
import Header from '../components/Header'
import experiences from "../data/website_experience.json"
import ExperienceCard from '../components/ExperienceCard'

function Resume({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id="resume">
      <Header title="Resume" />
      <div className="flex flex-col md:flex-row md:justify-center">

        {/* WORK */}
        <div className="mr-0 md:mr-20 xl:mr-36">
          {experiences.map((experience, index) => {
            let count = 0
            count = count +1
            if (experience.exp_type === "W") {
              return(
                <div className="mb-10">
                  <ExperienceCard experience={experience} />
                </div>
              )
            }
          })}
        </div>

        {/* EDUCATION */}
        <div>
          {experiences.map((experience) => {
            if (experience.exp_type === "E") {
              return(
                <div className="mb-10">
                  <ExperienceCard experience={experience} />
                </div>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume