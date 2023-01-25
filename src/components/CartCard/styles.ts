import styled from 'styled-components'

export const CartCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-weight: 700;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CartCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartCardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & > span {
    color: ${(props) => props.theme['gray-700']};
    text-transform: uppercase;
  }
`

export const CartCardMainActions = styled.div`
  display: flex;
  height: 2rem;
  gap: 0.5rem;

  & > button {
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;
    color: ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['gray-300']};
    border: 1px solid transparent;
    cursor: pointer;

    display: flex;
    align-items: center;

    & > span {
      color: ${(props) => props.theme['gray-600']};
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    &:hover {
      background: ${(props) => props.theme['gray-400']};

      & > span {
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`
