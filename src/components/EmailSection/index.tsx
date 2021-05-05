import React from 'react'
import {
  EmailSectionContainer,
  EmailSectionInputs,
  EmailSectionMessage
} from './style'

const EmailSection: React.FC = () => (
  <EmailSectionContainer>
    <form onSubmit={e => e.preventDefault()}>
      <EmailSectionInputs>
        <input placeholder="Assunto" />
        <input placeholder="Nome" />
        <input placeholder="Email" />
      </EmailSectionInputs>
      <EmailSectionMessage>
        <textarea placeholder="Mensagem" />
      </EmailSectionMessage>
    </form>
  </EmailSectionContainer>
)

export default EmailSection
