import React from 'react'
import {
  ContactGridContainer,
  ContactItemContainer,
  ContactItemIcon,
  ContactItemTitle
} from './style'

interface ContactItemProps {
  contact: string
  title?: string
  link: string
}

export const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  title,
  link
}) => {
  const onContactPress = () => {
    window.open(link, `_ blank`)
  }

  return (
    <ContactItemContainer onClick={onContactPress}>
      <ContactItemIcon>
        <img src={`/contacts/${contact}.svg`} alt={contact} />
      </ContactItemIcon>
      <ContactItemTitle>{title || contact}</ContactItemTitle>
    </ContactItemContainer>
  )
}

const ContactGrid: React.FC = () => (
  <ContactGridContainer>
    <ContactItem
      title="LinkedIn"
      contact="linkedin"
      link="https://www.linkedin.com/in/anderson-santos-902a29184/"
    />
    <ContactItem
      title="GitHub"
      contact="github"
      link="https://github.com/AndersonSantos0"
    />
    <ContactItem
      title="Rocketseat"
      contact="rocketseat"
      link="https://app.rocketseat.com.br/me/andersonsantos0"
    />
    <ContactItem
      title="Dribbble"
      contact="dribbble"
      link="https://dribbble.com/RockLakers"
    />
  </ContactGridContainer>
)

export default ContactGrid
