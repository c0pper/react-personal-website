import React, {useState} from 'react'
import Header from '../components/Header'
import experiences from "../data/website_experience.json"
import ExperienceCard from '../components/ExperienceCard'
import SectionContent from '../components/SectionContent'
import Button from '../components/Button'

function Resume({sectionColor}) {
  const [showMore, setShowMore] = useState(false)

  function splitByExpType(jsonArr) {
    const expE = [];
    const expW = [];
  
    for (let obj of jsonArr) {
      if (obj.exp_type === 'E') {
        expE.push(obj);
      } else if (obj.exp_type === 'W') {
        expW.push(obj);
      }
    }
  
    return [expE, expW];
  }

  const [expE, expW] = splitByExpType(experiences);
  const expE_sliced = expE.slice(0, 2)
  const expW_sliced = expW.slice(0, 4)


  return (
    <section className={`section ${sectionColor}`} id="resume">
      <Header title="Resume" />
      <SectionContent>
        <div className="flex flex-col md:flex-row md:justify-center">

          {/* WORK */}
          <div className="mr-0 md:mr-20 xl:mr-36">
            {showMore ? expW.map((experience, index) => {
                return(
                  <div className="mb-10">
                    <ExperienceCard experience={experience} />
                  </div>
                )
              }
            ) : expW_sliced.map((experience, index) => {
                return(
                  <div className="mb-10">
                    <ExperienceCard experience={experience} />
                  </div>
                )
              }
            )
          }
          </div>

          {/* EDUCATION */}
          <div>
            {showMore ? expE.map((experience) => {
              if (experience.exp_type === "E") {
                return(
                  <div className="mb-10">
                    <ExperienceCard experience={experience} />
                  </div>
                )
              }
            }) : expE_sliced.map((experience) => {
              if (experience.exp_type === "E") {
                return(
                  <div className="mb-10">
                    <ExperienceCard experience={experience} />
                  </div>
                )
              }
            })
          }
          </div>
        </div>
        <div
          onClick={() => setShowMore((prev) => !prev)}
          className="pt-10"
        >
          <Button
            additionalCSS='content-btn'
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      </SectionContent>
    </section>
  )
}

export default Resume