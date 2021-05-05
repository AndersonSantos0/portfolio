import styled from 'styled-components'

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--subBackground);
  border-radius: 8px;
`

export const ProjectCover = styled.div`
  border-radius: 8px;
  background-color: var(--background);
  display: flex;

  img {
    border-radius: 8px;
  }
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProjectTitle = styled.h1`
  color: var(--text);
  font-family: PoetsenOne;
  font-weight: 100;
  font-size: 1.5rem;
  letter-spacing: 0.001rem;
  margin: 0.8rem 0;
`

export const ProjectDescription = styled.p`
  color: var(--description);
  font-size: 1rem;
  font-family: Inter;
`

export const ProjectLangs = styled.p`
  color: var(--tech);
  font-family: Inter;
  font-size: 0.75rem;
  margin: 0.25rem 0;
`

export const ProjectInfos = styled.div`
  display: flex;
  justify-content: space-between;
`
