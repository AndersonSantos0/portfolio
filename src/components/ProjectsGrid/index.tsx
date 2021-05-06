import React from 'react'
import Project from '../Project'
import { ProjectsGridContainer } from './style'

const ProjectsGrid: React.FC = () => (
  <ProjectsGridContainer>
    <Project
      project="portifolio"
      title="Portifolio"
      description="Meu portifolio"
      repository="https://github.com/AndersonSantos0/portifolio"
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
      project="podcastr"
      title="Podcastr"
      description="Projeto do evento Next Level Week #5 da RocketSeat"
      repository="https://github.com/AndersonSantos0/nlw-podcastr"
      link="https://podcastr-delta.vercel.app"
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
      repository="https://github.com/AndersonSantos0/electron-podcastr"
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
      repository="https://github.com/AndersonSantos0/docket-form"
      link="https://docket-form.vercel.app"
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
      repository="https://github.com/AndersonSantos0/weboffice-renewed"
      link="https://weboffice-renewed.vercel.app"
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
      repository="https://github.com/AndersonSantos0/WebOffice"
      link="https://web-office.vercel.app"
      langs={[`HTML`, `CSS`, `Javascript`, `jQuery`]}
      platforms={[`web`, `github`]}
    />
  </ProjectsGridContainer>
)

export default ProjectsGrid
