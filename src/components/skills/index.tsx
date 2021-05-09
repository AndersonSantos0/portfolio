import { skillsType, skillType } from '@/@types/skills'
import React from 'react'
import { SkillContainer, SkillIcon, SkillsContainer, SkillTitle } from './style'

interface SkillItemProps {
  title?: string
  skill: skillsType
  background?: string
}

interface SkillsProps {
  skills: skillType[]
}

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

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <SkillsContainer>
    {skills.map(skill => (
      <SkillItem
        key={skill.id}
        background={skill.background}
        skill={skill.skill}
      />
    ))}
  </SkillsContainer>
)

export default Skills
