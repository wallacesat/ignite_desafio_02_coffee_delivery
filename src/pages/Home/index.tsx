import * as React from 'react'
import { toast } from 'react-toastify'

import { CatalogCard } from '../../components/CatalogCard'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CartItem } from '../../reducers/checkout/reducers'

import { HomeIntro } from './HomeIntro'

import { CardsContainer, HomeContainer, HomeMain } from './styles'

export function Home() {
  const { catalog, addNewItemToCart } = React.useContext(CheckoutContext)

  function handleAddNewItemToCart(item: CartItem) {
    const { amount, title } = item

    addNewItemToCart(item)

    toast.success(
      <span>
        {`${amount}`} <strong>{` ${title}`}</strong>
        {` adiconado${amount > 1 ? 's' : ''} ao carrinho`}
      </span>,
    )
  }

  return (
    <HomeContainer>
      <HomeIntro />
      <HomeMain>
        <h1>Nossos cafés</h1>
        <CardsContainer>
          {catalog.map(({ amount, ...cartItem }) => (
            <CatalogCard
              key={cartItem.id}
              {...cartItem}
              onClickOrderButton={handleAddNewItemToCart}
            />
          ))}
        </CardsContainer>
      </HomeMain>
    </HomeContainer>
  )
}
