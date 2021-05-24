export type projectsType =
  | 'portfolio'
  | 'podcastr'
  | 'podcastr-electron'
  | 'docket-form'
  | 'weboffice-renewed'
  | 'weboffice'
  | 'game-room'

export type goodsType = 'eslint' | 'prettier'

export type platformsType = 'desktop' | 'web' | 'github' | 'mobile'

export type ProjectType = {
  id: number
  project: projectsType
  title?: string
  description: string
  repository?: string
  link?: string
  langs: string[]
  platforms: platformsType[]
  goods?: goodsType[]
}
