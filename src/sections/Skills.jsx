import React, {useState} from 'react'
import skills from "../data/website_skill.json"
import Header from '../components/Header'
import Skill from '../components/Skill'
import SectionContent from '../components/SectionContent'
import Button from '../components/Button'
import ReactWordcloud from 'react-wordcloud'

function Skills({sectionColor}) {
  const [showMore, setShowMore] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth > 600 ? false : true)
  const skills_sliced = skills.slice(0, 6)

  const wourdcloudSkills = skills.map((skill) => (
    {text: skill.name, value: skill.percent}
  ))

  const wordcloudFontSizes = isMobile ? [20, 60] : [20, 60]

  const options = {
    colors: ["#FFFFFF"],
    enableTooltip: true,
    deterministic: true,
    fontFamily: "Ubuntu",
    fontSizes: wordcloudFontSizes,
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 3,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };

  const callbacks = {
    getWordTooltip: (word) => {
      if (word.value <= 25) {
        return (
          `Advanced Beginner`
        )
      } 
      else if (word.value <= 50) {
        return (
          `Competent`
        )
      }
      else if (word.value <= 75) {
        return (
          `Proficient`
        )
      }
      else {
        return (
          `Expert`
        )
      }
    }
  };


  return (
    <section className={`section ${sectionColor}`} id="skills">
      <Header title="Skills" />
      <SectionContent>
        <ReactWordcloud 
          words={wourdcloudSkills}
          options={options}
          callbacks={callbacks}
        />
        {/* <div className="grid grid-cols-2 md:grid-cols-3 grid-gap">
          {showMore ? 
          skills.map((skill, index) => (
            <div key={index} className="col-span-1">
              <Skill skill={skill} />
            </div>
          )) :
          skills_sliced.map((skill, index) => (
            <div key={index} className="col-span-1">
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
        </div> */}
      </SectionContent>
    </section>
  )
}

export default Skills