import React, {useState} from 'react'
import skills from "../data/website_skill.json"
import Header from '../components/Header'
import Skill from '../components/Skill'
import SectionContent from '../components/SectionContent'
import Button from '../components/Button'

function Skills({sectionColor}) {
  const [showMore, setShowMore] = useState(false)
  const skills_sliced = skills.slice(0, 6)


  return (
    <section className={`section ${sectionColor}`} id="skills">
      <Header title="Skills" />
      <SectionContent>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-gap">
          {showMore ? 
          skills.map((skill) => (
            <div className="col-span-1">
              <Skill skill={skill} />
            </div>
          )) :
          skills_sliced.map((skill) => (
            <div className="col-span-1">
              <Skill skill={skill} />
            </div>
          ))
        }
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

export default Skills