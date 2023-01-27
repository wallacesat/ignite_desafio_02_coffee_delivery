import { Trash } from 'phosphor-react'

import { AmountCounter } from '../AmountCounter'

import { formatBRLCurrency } from '../../utils/formatters'

import {
  CartCardContent,
  CartCardMain,
  CartCardMainActions,
  CartCardWrapper,
} from './styles'

interface CartCardProps {
  id: number
  imgUrl: string
  title: string
  amount: number
  price: number
  onClickMinus: (itemId: number) => void
  onClickPlus: (itemId: number) => void
  onClickRemove: (itemId: number, itemTitle: string) => void
}

export function CartCard({
  id,
  imgUrl,
  title,
  amount,
  price,
  onClickMinus,
  onClickPlus,
  onClickRemove,
}: CartCardProps) {
  return (
    <CartCardWrapper>
      <CartCardContent>
        <img src={imgUrl} alt="" />
        <CartCardMain>
          <span>{title}</span>
          <CartCardMainActions>
            <AmountCounter
              value={amount}
              onClickMinus={() => onClickMinus(id)}
              onClickPlus={() => onClickPlus(id)}
            />
            <button type="button" onClick={() => onClickRemove(id, title)}>
              <Trash size={16} />
              <span>REMOVER</span>
            </button>
          </CartCardMainActions>
        </CartCardMain>
      </CartCardContent>
      <span>{formatBRLCurrency(price)}</span>
    </CartCardWrapper>
  )
}
