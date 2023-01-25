import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  HeaderWrapper,
  CartWrapper,
  LocationTag,
  CartButton,
  CartBadge,
} from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/" title="Página inicial">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <CartWrapper>
        <LocationTag>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationTag>
        <NavLink to="/checkout" title="Carrinho">
          <CartButton>
            <CartBadge>3</CartBadge>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </CartWrapper>
    </HeaderWrapper>
  )
}
