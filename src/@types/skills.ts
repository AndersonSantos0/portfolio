export type skillsType =
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

export type skillType = {
  id: number
  skill: skillsType
  background?: string
}
