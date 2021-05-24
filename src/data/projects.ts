import { ProjectType } from '@/@types/projects'

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    project: `game-room`,
    title: `Game room`,
    description: `Uma plataforma de jogos`,
    link: `https://game-room.vercel.app`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Styled-components`,
      `igdb API`
    ],
    platforms: [`web`, `github`]
  },
  {
    id: 1,
    project: `portfolio`,
    title: `Portfolio`,
    description: `Meu portfolio`,
    repository: `https://github.com/AndersonSantos0/portfolio`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Styled-components`
    ],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 2,
    project: `podcastr`,
    title: `Podcastr`,
    description: `Projeto do evento Next Level Week #5 da RocketSeat`,
    repository: `https://github.com/AndersonSantos0/nlw-podcastr`,
    link: `https://podcastr-delta.vercel.app`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Sass`,
      `Styled-components`
    ],
    platforms: [`web`, `github`]
  },
  {
    id: 3,
    project: `podcastr-electron`,
    title: `Podcastr electron`,
    repository: `https://github.com/AndersonSantos0/electron-podcastr`,
    description: `Versão desktop do Podcastr`,

    langs: [
      `Electron`,
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Sass`,
      `Styled-components`
    ],
    platforms: [`web`, `github`]
  },
  {
    id: 4,
    project: `docket-form`,
    title: `Docket form`,
    description: `Um formulário para envio de dados`,
    repository: `https://github.com/AndersonSantos0/docket-form`,
    link: `https://docket-form.vercel.app`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Styled-components`
    ],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 5,
    project: `weboffice-renewed`,
    title: `WebOffice renewed`,
    description: `Uma versão atualizada do projeto WebOffice`,
    repository: `https://github.com/AndersonSantos0/weboffice-renewed`,
    link: `https://weboffice-renewed.vercel.app`,
    langs: [
      `React.js`,
      `Javascript`,
      `Typescript`,
      `Next.js`,
      `Styled-components`
    ],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 6,
    project: `weboffice`,
    title: `WebOffice`,
    description: `O front-end do TCC da FIEB (2019)`,
    repository: `https://github.com/AndersonSantos0/WebOffice`,
    link: `https://web-office.vercel.app`,
    langs: [`HTML`, `CSS`, `Javascript`, `jQuery`],
    platforms: [`web`, `github`]
  }
]
