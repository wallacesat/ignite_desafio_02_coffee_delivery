import * as React from 'react'
import { ShoppingCartSimple } from 'phosphor-react'

import {
  AddCartButton,
  CardFooter,
  CardWrapper,
  CartActions,
  CoffeeTag,
  PrefixValue,
  TagsContainer,
  Value,
} from './styles'
import { AmountCounter } from '../AmountCounter'

import { CartItem } from '../../reducers/checkout/reducers'

interface CatalogCardProps extends Omit<CartItem, 'amount'> {
  onClickOrderButton: (itemOrder: CartItem) => void
}

export function CatalogCard({
  id,
  imgUrl,
  title,
  description,
  tags,
  price,
  onClickOrderButton,
}: CatalogCardProps) {
  const [amount, setAmount] = React.useState(1)

  const calculatedPrice = amount < 2 ? price : amount * price

  function handleDecrementAmount() {
    setAmount((state) => {
      if (state > 1) {
        return state - 1
      }

      return 1
    })
  }

  function handleIncrementAmount() {
    setAmount((state) => state + 1)
  }

  function handleClickOrderButton() {
    onClickOrderButton({
      id,
      imgUrl,
      title,
      description,
      tags,
      price,
      amount,
    })
    setAmount(1)
  }

  return (
    <CardWrapper>
      <img src={imgUrl} alt="" />
      <TagsContainer>
        {tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </TagsContainer>
      <h2>{title}</h2>
      <span>{description}</span>
      <CardFooter>
        <div>
          <PrefixValue>R$</PrefixValue>{' '}
          <Value>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(calculatedPrice)}
          </Value>
        </div>
        <CartActions>
          <AmountCounter
            value={amount}
            onClickMinus={handleDecrementAmount}
            onClickPlus={handleIncrementAmount}
          />
          <AddCartButton onClick={handleClickOrderButton}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddCartButton>
        </CartActions>
      </CardFooter>
    </CardWrapper>
  )
}
