import * as React from 'react'

import { StyledInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
}

export function Input({ isOptional, ...props }: InputProps) {
  return (
    <>
      <StyledInput
        htmlFor="coffee-delivery-styled-input"
        isOptional={isOptional}
      >
        <input id="coffee-delivery-styled-input" {...props} />
        {isOptional && <span>Opcional</span>}
      </StyledInput>
    </>
  )
}
