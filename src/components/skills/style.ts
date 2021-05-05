import styled from 'styled-components'

interface SkillIconProps {
  background?: string
}

export const SkillContainer = styled.div`
  display: flex;
  //max-width: calc(25% - 2rem);
  min-width: 14.375rem;
  width: 100%;
  flex: 1 0;
  align-items: center;
  gap: 1rem;
  background-color: var(--subBackground);
  border-radius: 4px;
  padding: 0.5rem;
  transition: transform 0.4s;
  cursor: default;

  :hover {
    transform: scale(1.1);
  }
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));
  grid-gap: 1rem 2rem;
`

export const SkillIcon = styled.div<SkillIconProps>`
  width: 2.8rem;
  height: 2.8rem;
  min-width: 2.8rem;
  min-height: 2.8rem;
  border-radius: 4px;
  background-color: ${props => props.background};

  > img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`

export const SkillTitle = styled.p`
  color: var(--text);
  font-family: Inter;
`
