import styled from 'styled-components'

interface SyledInputProps {
  isOptional?: boolean
}

export const StyledInput = styled.label<SyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-200']};

  position: relative;

  & > span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['gray-500']};

    position: absolute;
    right: 0;
    padding-right: 0.75rem;
  }

  & > input {
    flex: 1;
    max-width: 100%;
    border-radius: 4px;
    border: 1px solid transparent;
    background: transparent;

    padding: 0.75rem;
    padding-right: ${(props) => (props.isOptional ? '4rem' : '0.75rem')};
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      border-color: ${(props) => props.theme['yellow-700']};
    }
  }
`
