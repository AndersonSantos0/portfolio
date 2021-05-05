import styled from 'styled-components'

export const CompanyCardContainer = styled.div`
  background-color: var(--subBackground);
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: '100%';
`

export const CompanyCardImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 4px;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  img {
    transform: translate(2px, 2px);
  }
`

export const CompanyCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

export const CompanyCardTitle = styled.h1`
  font-family: PoetsenOne;
  font-weight: 100;
  font-size: 1.2rem;
  color: var(--text);
`

export const CompanyCardTime = styled.p`
  font-family: Inter;
  font-size: 1rem;
  color: var(--subText);
`

export const CompanyCardLocation = styled.p`
  font-family: Inter;
  font-size: 0.8rem;
  color: var(--tech);
`
