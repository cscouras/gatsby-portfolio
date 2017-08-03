import React from 'react'
import ProjectsTitle from './ProjectsTitle'
import Card from './Card'
import Projects from '../Data/projects'

const Content = () => {
  return (
    <div className="content">
    {Projects.map(project => {
      return (
        <div key={Object.keys(project)} className="projectSection">
          <ProjectsTitle key={Object.keys(project)} title={Object.keys(project)} />
          {project[Object.keys(project)].map(proj => {
            return (
              <Card key={proj.link} title={proj.title} link={proj.link} imgsrc={proj.imgsrc}
                languages={proj.languages} />
            )
          })}
        </div>
      )
  })}
</div>
  )
}

export default Content
