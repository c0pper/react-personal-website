import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from "../data/website_project.json"
import StickySection from '../components/StickySection'

function Projects({sectionColor}) {
  return (
    <StickySection>
      <section className={`section ${sectionColor}`} id="projects">
        <Header title="Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1">
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
        </div>
      </section>
    </StickySection>
  )
}

export default Projects