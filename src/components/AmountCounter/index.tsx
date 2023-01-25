import { Minus, Plus } from 'phosphor-react'

import { AmountButton, AmountCounterWrapper } from './styles'

interface AmountCounterProps {
  value?: number
  onClickMinus?: () => void
  onClickPlus?: () => void
}

export function AmountCounter({
  value = 0,
  onClickMinus,
  onClickPlus,
}: AmountCounterProps) {
  return (
    <AmountCounterWrapper>
      <AmountButton onClick={onClickMinus}>
        <Minus size={14} weight="bold" />
      </AmountButton>
      <span>{value}</span>
      <AmountButton onClick={onClickPlus}>
        <Plus size={14} weight="bold" />
      </AmountButton>
    </AmountCounterWrapper>
  )
}
