import * as React from 'react'

import {
  addItemAction,
  decrementCartItemAction,
  incrementCartItemAction,
  removeItemAction,
} from '../reducers/checkout/actions'

import {
  Address,
  CartItem,
  CartType,
  checkoutReducer,
  initialCheckoutState,
  PaymentMethod,
} from '../reducers/checkout/reducers'

interface CheckoutContextType {
  catalog: CartItem[]
  cart: CartType
  address: Address | null
  paymentMethod: PaymentMethod | null
  addNewItemToCart: (item: CartItem) => void
  incrementCartItem: (itemId: number) => void
  decrementCartItem: (itemId: number) => void
  removeCartItem: (itemId: number) => void
}

export const CheckoutContext = React.createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: React.ReactNode
}

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [checkoutState, dispatch] = React.useReducer(checkoutReducer, {
    ...initialCheckoutState,
  })

  const { catalog, cart, address, paymentMethod } = checkoutState

  function addNewItemToCart(item: CartItem) {
    dispatch(addItemAction(item))
  }

  function decrementCartItem(itemId: number) {
    dispatch(decrementCartItemAction(itemId))
  }

  function incrementCartItem(itemId: number) {
    dispatch(incrementCartItemAction(itemId))
  }

  function removeCartItem(itemId: number) {
    dispatch(removeItemAction(itemId))
  }

  return (
    <CheckoutContext.Provider
      value={{
        catalog,
        cart,
        address,
        paymentMethod,
        addNewItemToCart,
        incrementCartItem,
        decrementCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
