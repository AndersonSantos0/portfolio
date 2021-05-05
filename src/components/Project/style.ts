import styled from 'styled-components'

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--subBackground);
  border-radius: 8px;
  transition: transform 0.4s;

  :hover {
    transform: scale(1.05);
  }

  :hover .project-actions {
    opacity: 1 !important;
  }
`

export const ProjectCover = styled.div`
  border-radius: 8px;
  background-color: var(--background);
  position: relative;
  display: flex;

  img {
    border-radius: 8px;
  }
`

export const ProjectCoverActions = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  opacity: 0;
  transition: opacity 0.4s;

  > div {
    width: 4rem;
    height: 4rem;
    background-color: var(--primary);
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    > p {
      position: absolute;
      font-family: Inter;
      color: var(--text);
      bottom: -2rem;
      margin-left: 2px;
    }
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
