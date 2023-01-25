import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5rem;

  & > h1 {
    font-family: 'baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-700']};
  }

  & > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const SuccessMain = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.5rem;
`

export const DeliveryDetails = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-500']},
        ${(props) => props.theme['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`
