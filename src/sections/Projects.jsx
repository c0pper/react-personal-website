import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import projects from "../data/website_project.json"

function Projects() {
  return (
    <section className="section" id="projects">
      <Header title="Projects" />
      <div className="flex">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects