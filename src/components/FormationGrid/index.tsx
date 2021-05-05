import React from 'react'
import FormationCard from '../Formationcard'
import { FormationGridContainer } from './style'

const FormationGrid: React.FC = () => (
  <FormationGridContainer>
    <FormationCard
      company="ignite"
      title="Ignite, Trilha React.js - Rocketseat"
      time="mar. de 2021 - 2023"
      description={`O <span class="go">Ignite</span> é um <span class="empashis">programa de aceleração para devs</span>, focado em preparar profissionais completos(as) para o mercado, treinando skills técnicas e comportamentais de forma intensiva e prática. O <span class="go">Ignite</span> é dividido em trilhas de conhecimento não-dependentes onde nos aprofundamos em uma tecnologia específica. Em resumo, o objetivo do Ignite é desenvolver habilidades que vão acelerar sua carreira através de uma <span class="tech">metodologia de aprendizado eficiente</span>, um currículo alinhado às necessidades do mercado e as atitudes que vão te ajudar a se destacar como profissional.`}
    />
    <FormationCard
      company="fieb"
      format=".png"
      title="Insituto técnico de Barueri - FIEB"
      time="fev. de 2018 - 2020"
      description={`O <span class="go">Técnico de Nível Médio em Informática</span> é o <strong class="empashis">profissional</strong> que desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ambientes de <span class="tech">desenvolvimento de sistemas</span>, sistemas operacionais e banco de dados. Realiza testes de programas de computador, mantendo registros que possibilitem análises e refinamento dos resultados. Executa manutenção de programas de computadores implantados.`}
    />
  </FormationGridContainer>
)

export default FormationGrid
