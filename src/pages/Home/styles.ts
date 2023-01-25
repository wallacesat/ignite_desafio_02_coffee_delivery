import styled from 'styled-components'

export const HomeContainer = styled.div``

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;
  margin-top: 3.375rem;
`
