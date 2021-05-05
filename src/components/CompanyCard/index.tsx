import React from 'react'
import {
  CompanyCardContainer,
  CompanyCardContent,
  CompanyCardImage,
  CompanyCardLocation,
  CompanyCardTime,
  CompanyCardTitle
} from './style'

const CompanyCard: React.FC = () => (
  <CompanyCardContainer>
    <CompanyCardImage>
      <img src="/companies/visualmix-logo.png" alt="visualmix" />
    </CompanyCardImage>
    <CompanyCardContent>
      <CompanyCardTitle>Visual mix, tecnologia para varejo</CompanyCardTitle>
      <CompanyCardTime>set. de 2019 - o momento</CompanyCardTime>
      <CompanyCardLocation>Alphaville</CompanyCardLocation>
    </CompanyCardContent>
  </CompanyCardContainer>
)

export default CompanyCard
