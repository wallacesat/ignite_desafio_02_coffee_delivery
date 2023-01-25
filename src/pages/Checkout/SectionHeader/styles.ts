import styled from 'styled-components'

interface AddressTitleContainerProps {
  iconColor: string
}

export const AddressTitleContainer = styled.div<AddressTitleContainerProps>`
  display: flex;
  gap: 0.5rem;
  color: ${(props) =>
    props.iconColor === 'yellow'
      ? props.theme['yellow-700']
      : props.theme['purple-500']};
`

export const AddressDescriptionContainer = styled.div`
  flex: 1;
  color: ${(props) => props.theme['gray-600']};

  & > span {
    font-size: 0.875rem;
  }
`
