import React from 'react'
import { FiGithub, FiMonitor, FiSmartphone, FiGlobe } from 'react-icons/fi'
import { PlatformsContainer } from './style'

type platformsType = 'github' | 'web' | 'desktop' | 'mobile'

interface ProjectPlatformViewProps {
  platforms: platformsType[]
}

const ProjectPlatformView: React.FC<ProjectPlatformViewProps> = ({
  platforms
}) => (
  <PlatformsContainer>
    {platforms.includes(`mobile`) && (
      <FiSmartphone title="mobile" color="var(--background)" size="1.8rem" />
    )}
    {platforms.includes(`desktop`) && (
      <FiMonitor title="desktop" color="var(--background)" size="1.8rem" />
    )}
    {platforms.includes(`web`) && (
      <FiGlobe title="web" color="var(--background)" size="1.8rem" />
    )}
    {platforms.includes(`github`) && (
      <FiGithub title="github" color="var(--background)" size="1.8rem" />
    )}
  </PlatformsContainer>
)

export default ProjectPlatformView
