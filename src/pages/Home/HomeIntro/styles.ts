import styled from 'styled-components'

import introBackground from '../../../assets/intro-background.svg'

export const IntroWrapper = styled.header`
  margin: 0 -10rem;
  padding: 0 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: url(${introBackground});
  background-size: cover;
  height: 544px;
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.1rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }

  & > span {
    font-size: 1.375rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 4.125rem;
  }
`

export const DifferentialsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
`

interface DifferentialItemProps {
  backgroundColor: string
}

export const DifferentialItem = styled.div<DifferentialItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.theme.background};
  }

  & > span {
    color: ${(props) => props.theme['gray-600']};
  }
`
