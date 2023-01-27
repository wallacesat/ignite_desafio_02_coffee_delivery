import styled from 'styled-components'

interface SyledInputProps {
  isOptional?: boolean
  hasError?: boolean
}

export const StyledInput = styled.label<SyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme['red-600'] : props.theme['gray-300']};
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

export const Tooltip = styled.div`
  position: absolute;
  z-index: 10;

  bottom: -70%;
  left: 5px;

  & > div {
    position: relative;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    padding: 0.4rem;
    color: ${(props) => props.theme['gray-200']};
    white-space: nowrap;
    font-size: 0.75rem;

    &:after {
      content: '';
      position: absolute;
      top: -5px;
      left: 10px;

      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;

      border-bottom: 5px solid rgba(0, 0, 0, 0.4);
    }
  }
`
