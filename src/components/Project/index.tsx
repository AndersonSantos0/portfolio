import React from 'react'
import Image from 'next/image'
import {
  ProjectContainer,
  ProjectContent,
  ProjectCover,
  ProjectDescription,
  ProjectInfos,
  ProjectLangs,
  ProjectTitle
} from './style'
import ProjectPlatformView from '../ProjectPlatformsView'
import ProjectGoodsView from '../ProjectGoodsView'

type goodsType = 'eslint' | 'prettier'
type platformsType = 'desktop' | 'web' | 'github' | 'mobile'

interface ProjectProps {
  project: string
  title?: string
  description?: string
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
  goods
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
