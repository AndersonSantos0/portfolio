import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --primary: ${props => props.theme.colors.primary};
        --secondary: ${props => props.theme.colors.secondary};
        --background: ${props => props.theme.colors.background};
        --subBackground: ${props => props.theme.colors.subBackground};
        --text: ${props => props.theme.colors.text};
        --subText: ${props => props.theme.colors.subText};
        --description: ${props => props.theme.colors.description};
        --emphasis: ${props => props.theme.colors.emphasisText};
        --lang: ${props => props.theme.colors.langText};
        --tech: ${props => props.theme.colors.techText};
        --go: ${props => props.theme.colors.goText};
    }

    .empashis{
      color: var(--emphasis)
    }

    .sub{
      color: var(--subText)
    }

    .lang{
      color: var(--lang)
    }

    .tech{
      color: var(--tech)
    }

    .go{
      color: var(--go)
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1120px) {
      html{
          font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
        html{
            font-size: 87.5%;
        }
    }

    @media (max-width: 1100px) {
      .menu{
        z-index: 10;
        position: relative;

        .hamburger{
          display: flex !important;
        }

        ul.active{
          left: 0;
        }

        ul{
          position: absolute;
          display: block !important;
          background-color: var(--subText);
          top: 0;
          left: -60%;
          height: 100vh !important;
          width: 60%;
          transition: left .4s;

          li {
            height: 5rem !important;

            a{
              color: var(--background);
            }

            a.active{
              color: var(--primary)
            }
          }
        }
      }
    }

    @media (max-width: 900px){
      .screen{
        flex-direction: column;
        height: 100vh;
        overflow-y: auto;
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        -ms-overflow-style: none;
        scrollbar-width: none;

        ::-webkit-scrollbar {
          display: none;
        }

        .downArrow{
          display: block !important;
        }

        aside{
          width: 100%;
          height: 100%;
          position: relative;
          scroll-snap-align: start;
          max-width: unset;
        }

        #content{
          scroll-snap-align: start;
        }
      }
    }
`
