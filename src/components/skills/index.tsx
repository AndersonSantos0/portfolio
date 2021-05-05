import React from 'react'
import { SkillContainer, SkillIcon, SkillsContainer, SkillTitle } from './style'

interface SkillItemProps {
  title?: string
  skill: skills
  background?: string
}

type skills =
  | 'javascript'
  | 'typescript'
  | 'reactjs'
  | 'react-native'
  | 'HTML'
  | 'CSS'
  | 'nextjs'
  | 'sass'
  | 'styled-components'
  | 'redux'
  | 'jest'
  | 'git'
  | 'eslint'
  | 'prettier'
  | 'jQuery'

export const SkillItem: React.FC<SkillItemProps> = ({
  title,
  skill,
  background
}) => (
  <SkillContainer>
    <SkillIcon background={background}>
      <img src={`/skills/${skill}.svg`} alt={skill} />
    </SkillIcon>
    <SkillTitle>{title || skill}</SkillTitle>
  </SkillContainer>
)

export const MainSkills: React.FC = () => (
  <SkillsContainer>
    <SkillItem skill="javascript" />
    <SkillItem skill="typescript" />
    <SkillItem skill="reactjs" />
    <SkillItem background="var(--text)" skill="react-native" />
    <SkillItem background="#FFA500" skill="HTML" />
    <SkillItem background="#3C99DC" skill="CSS" />
    <SkillItem skill="nextjs" />
    <SkillItem skill="sass" />
    <SkillItem skill="styled-components" />
    <SkillItem background="#AA5499" skill="redux" />
  </SkillsContainer>
)

export const GoodsSkils: React.FC = () => (
  <SkillsContainer>
    <SkillItem background="#fff" skill="eslint" />
    <SkillItem background="#000" skill="prettier" />
    <SkillItem background="#000" skill="jest" />
  </SkillsContainer>
)

export const OthersSkills: React.FC = () => (
  <SkillsContainer>
    <SkillItem background="#4B32C3" skill="jQuery" />
    <SkillItem background="#000" skill="git" />
  </SkillsContainer>
)
