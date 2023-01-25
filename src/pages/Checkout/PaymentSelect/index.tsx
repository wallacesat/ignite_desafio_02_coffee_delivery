import { Bank, CreditCard, Money } from 'phosphor-react'

import { PaymentMethod } from '../../../reducers/checkout/reducers'

import { PaymentSelectWrapper } from './styles'

interface PaymentSelectProps {
  variant: PaymentMethod
  isSelected?: boolean
  onSelect: () => void
}

export function PaymentSelect({
  variant,
  isSelected = false,
  onSelect,
}: PaymentSelectProps) {
  const paymentType = {
    credit: {
      text: 'Cartão de crédito',
      icon: <CreditCard size={16} />,
    },
    debit: {
      text: 'Cartão de débito',
      icon: <Bank size={16} />,
    },
    money: {
      text: 'Dinheiro',
      icon: <Money size={16} />,
    },
  }

  return (
    <PaymentSelectWrapper isSelected={isSelected} onClick={onSelect}>
      {paymentType[variant].icon}
      <span>{paymentType[variant].text}</span>
    </PaymentSelectWrapper>
  )
}
