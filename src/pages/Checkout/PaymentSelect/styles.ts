import styled from 'styled-components'

interface PaymentSelectWrapperProps {
  isSelected: boolean
}

export const PaymentSelectWrapper = styled.div<PaymentSelectWrapperProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.isSelected ? props.theme['purple-700'] : 'transparent')};
  background: ${(props) =>
    props.isSelected ? props.theme['purple-200'] : props.theme['gray-300']};
  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;

  & > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 140%;
    color: ${(props) => props.theme['gray-600']};
  }

  &:hover {
    background: ${(props) =>
      props.isSelected ? props.theme['purple-200'] : props.theme['gray-400']};

    & > span {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`
