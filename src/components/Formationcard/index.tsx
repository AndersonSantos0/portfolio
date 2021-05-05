import React from 'react'
import {
  FormationCardContainer,
  FormationCardContent,
  FormationCardImage,
  FormationCardLocation,
  FormationCardTime,
  FormationCardTitle,
  FormationDescription,
  FormationInfo
} from './style'

interface FormationCardProps {
  company: string
  format?: '.svg' | '.png' | '.jpg'
  title: string
  time: string
  location?: string
  description: string
}

const FormationCard: React.FC<FormationCardProps> = ({
  company,
  format = `.svg`,
  title,
  time,
  location,
  description
}) => (
  <FormationCardContainer>
    <FormationInfo>
      <FormationCardImage>
        <img src={`/formation/${company + format}`} alt={company} />
      </FormationCardImage>
      <FormationCardContent>
        <FormationCardTitle>{title}</FormationCardTitle>
        <FormationCardTime>{time}</FormationCardTime>
        {location && <FormationCardLocation>{location}</FormationCardLocation>}
      </FormationCardContent>
    </FormationInfo>
    <FormationDescription dangerouslySetInnerHTML={{ __html: description }} />
  </FormationCardContainer>
)

export default FormationCard
