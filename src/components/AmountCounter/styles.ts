import styled from 'styled-components'

export const AmountCounterWrapper = styled.div`
  display: flex;
  width: 4.5rem;
  height: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};

  & > span {
    color: ${(props) => props.theme['gray-800']};
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const AmountButton = styled.button`
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme['purple-500']};

  &:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`
