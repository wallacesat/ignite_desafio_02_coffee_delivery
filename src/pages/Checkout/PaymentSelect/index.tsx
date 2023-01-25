import { Bank, CreditCard, Money } from 'phosphor-react'

import { PaymentSelectWrapper } from './styles'

export type PaymentSelectVariant = 'credit' | 'debit' | 'money'

interface PaymentSelectProps {
  variant: PaymentSelectVariant
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
