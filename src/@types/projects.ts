export type projectsType =
  | 'portifolio'
  | 'podcastr'
  | 'podcastr-electron'
  | 'docket-form'
  | 'weboffice-renewed'
  | 'weboffice'

export type goodsType = 'eslint' | 'prettier'

export type platformsType = 'desktop' | 'web' | 'github' | 'mobile'

export type ProjectType = {
  project: projectsType
  title?: string
  description: string
  repository: string
  link?: string
  langs: string[]
  platforms: platformsType[]
  goods?: goodsType[]
}
