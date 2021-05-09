import { ProjectType } from '@/@types/projects'
import React from 'react'
import Project from '../Project'
import { ProjectsGridContainer } from './style'

interface NewProjectGridProps {
  projects: ProjectType[]
}

const ProjectsGrid: React.FC<NewProjectGridProps> = ({ projects }) => (
  <ProjectsGridContainer>
    {projects.map(project => (
      <Project
        key={project.id}
        project={project.project}
        title={project.title}
        description={project.description}
        repository={project.repository}
        link={project.link}
        langs={project.langs}
        platforms={project.platforms}
        goods={project.goods}
      />
    ))}
  </ProjectsGridContainer>
)

export default ProjectsGrid
