/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import Image from 'next/image'
import { FiGlobe, FiGithub } from 'react-icons/fi'
import { goodsType, platformsType } from '@/@types/projects'
import {
  ProjectContainer,
  ProjectContent,
  ProjectCover,
  ProjectCoverActions,
  ProjectDescription,
  ProjectInfos,
  ProjectLangs,
  ProjectTitle
} from './style'
import ProjectPlatformView from '../ProjectPlatformsView'
import ProjectGoodsView from '../ProjectGoodsView'

interface ProjectProps {
  project: string
  title?: string
  description?: string
  repository?: string
  link?: string
  langs: string[]
  platforms: platformsType[]
  goods?: goodsType[]
}

const Project: React.FC<ProjectProps> = ({
  project,
  title,
  description,
  langs,
  platforms,
  goods,
  repository,
  link
}) => (
  <ProjectContainer>
    <ProjectCover>
      <Image
        width={800}
        height={480}
        objectFit="cover"
        objectPosition="top"
        src={`/projects/${project}.png`}
        alt={project}
      />
      <ProjectCoverActions className="project-actions">
        {repository && (
          <div onClick={() => window.open(repository, `_blank`)}>
            <FiGithub size="1.5rem" color="#fff" />
            <p>Repositório</p>
          </div>
        )}
        {link && (
          <div onClick={() => window.open(link, `_blank`)}>
            <FiGlobe size="1.5rem" color="#fff" />
            <p>Web</p>
          </div>
        )}
      </ProjectCoverActions>
    </ProjectCover>
    <ProjectContent>
      <ProjectTitle>{title || project}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLangs>
        {langs.map((lang, idx) => {
          if (idx + 1 === langs.length) return lang
          return `${lang}, `
        })}
      </ProjectLangs>
    </ProjectContent>
    <div style={{ flex: 1, minHeight: `1rem` }} />
    <ProjectInfos>
      <ProjectGoodsView skills={goods} />
      <ProjectPlatformView platforms={platforms} />
    </ProjectInfos>
  </ProjectContainer>
)

export default Project
