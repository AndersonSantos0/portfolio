import React from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import {
  EmailSectionContainer,
  EmailSectionInputs,
  EmailSectionMessage
} from './style'

const EmailSection: React.FC = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `service_sma506h`,
        `template_wdfhd19`,
        e.target,
        `user_FpZWxaRu3p0fAHVNipF8C`
      )
      .then(
        () => {
          toast.info(`Email enviado com sucesso!`)
          e.target.reset()
        },
        () => {
          toast.error(`Oops, algo deu errado, tente novamente mais tarde`)
        }
      )
  }

  return (
    <EmailSectionContainer>
      <form id="contact-form" onSubmit={onSubmit}>
        <div>
          <EmailSectionInputs>
            <input required type="text" name="subject" placeholder="Assunto" />
            <input required type="text" name="user_name" placeholder="Nome" />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </EmailSectionInputs>
          <EmailSectionMessage>
            <textarea required name="message" placeholder="Mensagem" />
          </EmailSectionMessage>
        </div>
        <input className="submitButton" type="submit" />
      </form>
    </EmailSectionContainer>
  )
}

export default EmailSection
