/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react'

import Menu from '@/components/menu'
import User from '@/components/user'
import { GoodsSkils, MainSkills, OthersSkills } from '@/components/skills'
import {
  ContentSection,
  Content,
  ContentContainer,
  ProfileAside,
  ProfileBio,
  ProfileBioContainer,
  ProfileContainer,
  ProfileName,
  ProfileProfession,
  ProfileSeparator,
  Screen
} from '@/styles/Home'
import Lottie from 'react-lottie'
import ProjectsGrid from '@/components/ProjectsGrid'
import CompanyCard from '@/components/CompanyCard'
import FormationGrid from '@/components/FormationGrid'
import ContactGrid from '@/components/ContactGrid'
import EmailSection from '@/components/EmailSection'

import DownAnim from '@/assets/animations/down.json'

type sections = 'skills' | 'projects' | 'experience' | 'objectives' | 'contact'

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null)
  const experienceRef = useRef<HTMLHeadingElement>(null)
  const objectivesRef = useRef<HTMLHeadingElement>(null)
  const contactRef = useRef<HTMLHeadingElement>(null)

  const [activeSection, setActiveSection] = useState<sections>(`skills`)

  const getActualSection = (scrollPosition: number): void => {
    if (
      !contactRef.current ||
      !objectivesRef.current ||
      !experienceRef.current ||
      !projectsRef.current
    )
      return

    if (scrollPosition >= contactRef.current?.offsetTop - 200)
      return setActiveSection(`contact`)
    if (scrollPosition >= objectivesRef.current?.offsetTop - 200)
      return setActiveSection(`objectives`)
    if (scrollPosition >= experienceRef.current?.offsetTop - 200)
      return setActiveSection(`experience`)
    if (scrollPosition >= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`projects`)
    if (scrollPosition <= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`skills`)
  }

  return (
    <Screen className="screen">
      <ProfileAside>
        <ProfileContainer>
          <User />
          <ProfileName>Anderson Santos</ProfileName>
          <ProfileProfession>Desenvolvedor front-end</ProfileProfession>
        </ProfileContainer>
        <ProfileSeparator />
        <ProfileBioContainer>
          <ProfileBio>
            Tenho 18 anos, trabalho como{` `}
            <span className="empashis">front-end</span> na Visualmix, utilizando
            {` `}
            <span className="tech">React </span>
            como ferramenta principal. <br /> <br /> Estudei no instituto
            técnico de barueri, Brasílio Flores de azevedo, ensino médio com
            curso{` `}
            <span className="empashis">técnico de informática</span> integrado.
            {` `}
            <br /> <br /> Sou{` `}
            <strong className="empashis">apaixonado </strong>pelo front-end,
            principalmente quando utilizado o{` `}
            <span className="tech">React </span> e o{` `}
            <span className="tech">Next.js</span>, tenho o objetivo de crescer,
            me especializar e me tornar conhecido na área. E acredito que a
            melhor maneira de fazer isso é correndo atrás de{` `}
            <span className="sub">conhecimento</span>.
          </ProfileBio>
        </ProfileBioContainer>
        <a href="#content" className="downArrow">
          <Lottie
            options={{
              animationData: DownAnim
            }}
            height="3rem"
          />
        </a>
      </ProfileAside>
      <ContentSection id="content">
        <Menu active={activeSection} />
        <Content onScroll={e => getActualSection(e.currentTarget.scrollTop)}>
          <ContentContainer>
            <h1 id="skills">Habilidades principais</h1>
            <MainSkills />
            <h1>Boas práticas</h1>
            <GoodsSkils />
            <h1>Outras</h1>
            <OthersSkills />
            <h1 ref={projectsRef} id="projects">
              Projetos
            </h1>
            <ProjectsGrid />
            <h1 ref={experienceRef} id="experience">
              Experiência
            </h1>
            <div
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fill, minmax(22rem, 1fr))`,
                gridGap: `1rem 2rem`
              }}
            >
              <CompanyCard />
            </div>
            <h1>Formação</h1>
            <FormationGrid />
            <h1 ref={objectivesRef} id="objectives">
              Objetivos
            </h1>
            <p>
              Tenho o objetivo de crescer na área de{` `}
              <span className="tech">front-end</span>, utilizando como linguagem
              principal o <span className="lang">Javascript</span> (e{` `}
              <span className="lang">Typescript</span>), pois é uma linguagem na
              qual tenho muita vontade de{` `}
              <strong className="empashis">dominar</strong>, principalmente
              quando aplicada a frameworks como o{` `}
              <span className="tech">React</span> e o{` `}
              <span className="tech">Electron</span>. Apesar de gostar de
              desenvolver aplicativos também gosto de fazer{` `}
              <span className="go">designs</span>, utilizando{` `}
              <span className="tech">figma</span> como ferramenta principal de
              prototipagem, então pretendo fazer do design{` `}
              <span className="tech">UX/UI</span> um{` `}
              <span className="go">hobby</span> futuramente.
              <br />
              <br />
              Após dominar o front-end pretendo me tornar um{` `}
              <strong className="empashis">desenvolvedor full-stack</strong>,
              utilizando o <span className="tech">node.js</span> como tecnologia
              principal, por conta da sua{` `}
              <span className="go">versatilidade</span> e{` `}
              <span className="go">eficiência</span>, além de que o node também
              utiliza{` `}
              <span className="lang">javascript</span> em sua estrutura de{` `}
              <span className="empashis">desenvolvimento</span>.
            </p>
            <h1 ref={contactRef} id="contact">
              Contatos
            </h1>
            <ContactGrid />
            <h1>Email</h1>
            <EmailSection />
          </ContentContainer>
        </Content>
      </ContentSection>
    </Screen>
  )
}

export default Home
