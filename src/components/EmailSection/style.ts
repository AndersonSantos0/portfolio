import styled from 'styled-components'

export const EmailSectionContainer = styled.div`
  > form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 1rem 2rem;
  }
`

export const EmailSectionInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

    ::placeholder {
      color: var(--description);
    }
  }
`
