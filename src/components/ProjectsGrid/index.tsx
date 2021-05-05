import React from 'react'
import Project from '../Project'
import { ProjectsGridContainer } from './style'

const ProjectsGrid: React.FC = () => (
  <ProjectsGridContainer>
    <Project
      project="podcastr"
      title="Podcastr"
      description="Projeto do evento Next Level Week #5 da RocketSeat"
      langs={[
        `React.js`,
        `Javascript`,
        `Typescript`,
        `Next.js`,
        `Sass`,
        `Styled-components`
      ]}
      platforms={[`web`, `github`]}
    />
    <Project
      project="podcastr-electron"
      title="Podcastr electron"
      description="Versão desktop do Podcastr"
      langs={[
        `electron`,
        `React.js`,
        `Javascript`,
        `Typescript`,
        `Next.js`,
        `Sass`,
        `Styled-components`
      ]}
      platforms={[`desktop`, `github`]}
    />
    <Project
      project="docket-form"
      title="Docket form"
      description="Um formulário para envio de dados"
      langs={[
        `React.js`,
        `Javascript`,
        `Typescript`,
        `Next.js`,
        `Styled-components`
      ]}
      platforms={[`web`, `github`]}
      goods={[`eslint`, `prettier`]}
    />
    <Project
      project="weboffice-renewed"
      title="WebOffice renewed"
      description="Uma versão atualizada do projeto WebOffice"
      langs={[
        `React.js`,
        `Javascript`,
        `Typescript`,
        `Next.js`,
        `Styled-components`
      ]}
      platforms={[`web`, `github`]}
      goods={[`eslint`, `prettier`]}
    />
    <Project
      project="weboffice"
      title="WebOffice"
      description="O front-end do TCC da FIEB (2019)"
      langs={[`HTML`, `CSS`, `Javascript`, `jQuery`]}
      platforms={[`web`, `github`]}
    />
  </ProjectsGridContainer>
)

export default ProjectsGrid
