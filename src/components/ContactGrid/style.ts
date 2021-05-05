import styled from 'styled-components'

export const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--subBackground);
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;
  cursor: pointer;
`

export const ContactItemIcon = styled.div`
  background-color: #fff;
  display: flex;
  border-radius: 8px;
`

export const ContactItemTitle = styled.p`
  font-family: Inter;
  color: var(--text);
`

export const ContactGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
