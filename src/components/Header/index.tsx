import * as React from 'react'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { CheckoutContext } from '../../contexts/CheckoutContext'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  HeaderWrapper,
  CartWrapper,
  LocationTag,
  CartButton,
  CartBadge,
} from './styles'

export function Header() {
  const {
    cart: { totalItems },
    address,
  } = React.useContext(CheckoutContext)

  return (
    <HeaderWrapper>
      <NavLink to="/" title="Página inicial">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <CartWrapper>
        {!!address && (
          <LocationTag>
            <MapPin size={22} weight="fill" />
            <span>
              {address.city}, {address.state}
            </span>
          </LocationTag>
        )}
        <NavLink to="/checkout" title="Carrinho">
          <CartButton>
            {!!totalItems && <CartBadge>{totalItems}</CartBadge>}
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </CartWrapper>
    </HeaderWrapper>
  )
}
