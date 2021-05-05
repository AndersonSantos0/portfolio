/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { MenuContainer } from './style'

interface MenuProps {
  active: 'skills' | 'projects' | 'experience' | 'objectives' | 'contact'
}

const Menu: React.FC<MenuProps> = ({ active }) => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <MenuContainer className="menu">
      <div className="hamburger" onClick={() => setActiveMenu(true)}>
        <FiMenu size="2rem" color="var(--text)" />
      </div>
      <ul
        onClick={() => setActiveMenu(false)}
        className={activeMenu ? `active` : undefined}
      >
        <li>
          <a
            className={active === `skills` ? `active` : undefined}
            href="#skills"
          >
            {` `}
            Habilidades{` `}
          </a>
        </li>
        <li>
          <a
            className={active === `projects` ? `active` : undefined}
            href="#projects"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            className={active === `experience` ? `active` : undefined}
            href="#experience"
          >
            Experiência
          </a>
        </li>
        <li>
          <a
            className={active === `objectives` ? `active` : undefined}
            href="#objectives"
          >
            Objetivos
          </a>
        </li>
        <li>
          <a
            className={active === `contact` ? `active` : undefined}
            href="#contact"
          >
            Contato
          </a>
        </li>
      </ul>
    </MenuContainer>
  )
}

export default Menu
