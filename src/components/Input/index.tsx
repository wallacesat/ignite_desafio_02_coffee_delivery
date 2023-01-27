import * as React from 'react'
import { FieldError, useFormContext } from 'react-hook-form'

import { StyledInput, Tooltip } from './styles'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isOptional?: boolean
  fieldError?: FieldError
  name: string
  mask?: (value: string) => string
}

export function Input({
  isOptional,
  fieldError,
  mask,
  name,
  ...props
}: InputProps) {
  const { register, clearErrors } = useFormContext()

  function applyMask(e: any) {
    const value = e.target.value

    if (value) {
      clearErrors()
    }

    if (mask && value && typeof value === 'string') {
      e.target.value = mask(value)
    }
  }

  const id = `coffee-delivery-styled-input-${name}`
  const errorMessage = fieldError?.message

  return (
    <>
      <StyledInput htmlFor={id} isOptional={isOptional} hasError={!!fieldError}>
        <input
          id={id}
          {...props}
          {...register(name, {
            onChange: applyMask,
          })}
        />
        {isOptional && <span>Opcional</span>}
        {!!errorMessage && (
          <Tooltip>
            <div>{errorMessage}</div>
          </Tooltip>
        )}
      </StyledInput>
    </>
  )
}
