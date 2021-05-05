import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 100%;
  height: 5rem;

  .hamburger {
    display: none;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    li {
      display: flex;
      flex: 1;
      height: 100%;

      a {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        font-family: Inter;
        color: var(--text);
        text-decoration: none;
        transition: color 0.4s;
        position: relative;
      }

      a:hover,
      a.active {
        color: var(--secondary);
      }

      a:hover::after,
      a.active::after {
        width: 3rem;
      }

      a::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 0;
        background-color: var(--secondary);
        bottom: 1.5rem;
        transition: width 0.2s;
      }
    }
  }
`
