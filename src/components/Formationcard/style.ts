import styled from 'styled-components'

export const FormationCardContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`

export const FormationInfo = styled.div`
  background-color: var(--subBackground);
  position: relative;
  z-index: 2;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
`

export const FormationCardImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 4px;
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;

  img {
    max-width: calc(100% - 1rem);
    max-height: calc(100% - 1rem);
  }
`

export const FormationCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

export const FormationCardTitle = styled.h1`
  font-family: PoetsenOne;
  font-weight: 100;
  font-size: 1.2rem;
  color: var(--text);
`

export const FormationCardTime = styled.p`
  font-family: Inter;
  font-size: 1rem;
  color: var(--subText);
`

export const FormationCardLocation = styled.p`
  font-family: Inter;
  font-size: 0.8rem;
  color: var(--tech);
`

export const FormationDescription = styled.div`
  position: relative;
  padding: 1rem;
  flex: 1;
  top: -8px;
  padding-top: calc(1rem + 4px);
  background-color: #0c464866;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  line-height: 1.5rem;
  color: var(--description);
  font-family: Inter;
`
