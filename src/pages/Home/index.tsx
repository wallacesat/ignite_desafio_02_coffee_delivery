import * as React from 'react'

import { CatalogCard } from '../../components/CatalogCard'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { CartItem } from '../../reducers/checkout/reducers'

import { HomeIntro } from './HomeIntro'

import { CardsContainer, HomeContainer, HomeMain } from './styles'

export function Home() {
  const { catalog, addNewItemToCart } = React.useContext(CheckoutContext)

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
              onClickOrderButton={addNewItemToCart}
            />
          ))}
        </CardsContainer>
      </HomeMain>
    </HomeContainer>
  )
}
