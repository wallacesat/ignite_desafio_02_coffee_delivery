import { Trash } from 'phosphor-react'

import { AmountCounter } from '../AmountCounter'

import americano from '../../assets/coffeeImages/americano.svg'

import {
  CartCardContent,
  CartCardMain,
  CartCardMainActions,
  CartCardWrapper,
} from './styles'

export function CartCard() {
  return (
    <CartCardWrapper>
      <CartCardContent>
        <img src={americano} alt="" />
        <CartCardMain>
          <span>Expresso Tradicional</span>
          <CartCardMainActions>
            <AmountCounter />
            <button>
              <Trash size={16} />
              <span>REMOVER</span>
            </button>
          </CartCardMainActions>
        </CartCardMain>
      </CartCardContent>
      <span>R$ 9,90</span>
    </CartCardWrapper>
  )
}
