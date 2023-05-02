import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from "../data/website_project.json"

function Projects({sectionColor}) {
  return (
    <section className={`section ${sectionColor}`} id="projects">
      <Header title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-36">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
      </div>
    </section>
  )
}

export default Projects