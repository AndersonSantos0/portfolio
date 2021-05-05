import React from 'react'
import EslinIcon from '../Icons/EslintIcon'
import PrettierIcon from '../Icons/PrettierIcon'
import { GoodsContainer } from './style'

type platformsType = 'eslint' | 'prettier'

interface ProjectGoodsViewProps {
  skills?: platformsType[]
}

const ProjectGoodsView: React.FC<ProjectGoodsViewProps> = ({ skills = [] }) => (
  <GoodsContainer>
    {skills.includes(`eslint`) && (
      <div title="eslint">
        <EslinIcon size={16 * 1.8} color="var(--background)" />
      </div>
    )}
    {skills.includes(`prettier`) && (
      <div title="prettier">
        <PrettierIcon size={16 * 1.8} color="var(--background)" />
      </div>
    )}
  </GoodsContainer>
)

export default ProjectGoodsView
