import React, {useState} from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from "../data/website_project.json"
import SectionContent from '../components/SectionContent'
import Button from '../components/Button'

function Projects({sectionColor}) {
  const [showMore, setShowMore] = useState(false)
  const projects_sliced = projects.slice(0, 6)

  return (
    <section className={`section ${sectionColor}`} id="projects">
      <Header title="Projects" />
      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36">
            {showMore ? projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            )) :
            projects_sliced.map((project, index) => (
              <ProjectCard key={index} project={project} />
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

export default Projects