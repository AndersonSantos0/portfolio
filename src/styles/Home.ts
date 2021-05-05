import styled from 'styled-components'

export const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

export const ProfileAside = styled.aside`
  position: relative;
  z-index: 15;
  flex: 1;
  max-height: 100vh;
  min-height: 100vh;
  max-width: 450px;
  background-color: var(--subBackground);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  .downArrow {
    display: none;
    margin-top: 4rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileName = styled.h1`
  color: var(--text);
  font-family: PoetsenOne;
  font-weight: 100;
  text-align: center;
  font-size: 24px;
  margin-top: 2rem;
`

export const ProfileProfession = styled.h2`
  color: var(--subText);
  font-family: PoetsenOne;
  font-weight: 100;
  text-align: center;
  font-size: 18px;
  margin-top: 0.25rem;
`

export const ProfileSeparator = styled.div`
  height: 0.25rem;
  width: 4rem;
  border-radius: ${0.25 / 2}rem;
  background-color: var(--background);
  margin: 2rem auto;
`

export const ProfileBioContainer = styled.div`
  width: 20rem;
  margin: 0 auto;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ProfileBio = styled.p`
  color: var(--description);
  font-family: Inter;
  font-size: 0.9rem;
  line-height: 1.35rem;
`

export const ContentSection = styled.div`
  position: relative;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  max-height: 100vh;
`

export const Content = styled.div`
  flex: 1 1;
  background-color: var(--background);
  overflow-y: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--subBackground);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }
`

export const ContentContainer = styled.div`
  flex: 1 1;
  padding: 0 2rem;
  padding-bottom: 2rem;
  background-color: var(--background);

  > h1 {
    color: var(--text);
    font-family: PoetsenOne;
    font-weight: 100;
    margin: 2rem 0;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  > p {
    color: var(--subText);
    font-family: Inter;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 8px;
  }
`
