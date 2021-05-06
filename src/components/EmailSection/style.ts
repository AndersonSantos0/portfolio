import styled from 'styled-components'

export const EmailSectionContainer = styled.div`
  > form {
    display: flex;
    flex-direction: column;

    > div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
      grid-gap: 1.5rem 2rem;
    }

    > .submitButton {
      padding: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--primary);
      color: var(--text);
      outline: none;
      cursor: pointer;
      transition: 0.4s;
      font-family: Inter;
      margin-left: auto;
      margin-top: 1.5rem;
      width: calc(50% - 1rem);

      :hover {
        transform: scale(1.025);
      }
      :active {
        transform: scale(0.975);
        background-color: var(--secondary);
      }
    }
  }
`

export const EmailSectionInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;

  > input {
    background-color: var(--subBackground);
    border: none;
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    font-family: Inter;
    color: var(--text);

    ::placeholder {
      color: var(--description);
    }
  }
`

export const EmailSectionMessage = styled.div`
  flex: 1;
  display: flex;

  > textarea {
    resize: none;
    flex: 1;
    background-color: var(--subBackground);
    border: none;
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    font-family: Inter;
    color: var(--text);
    min-height: 10rem;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
    }

    ::placeholder {
      color: var(--description);
    }
  }
`
