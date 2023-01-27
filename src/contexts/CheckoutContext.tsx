import * as React from 'react'

import {
  addItemAction,
  addNewAddressAction,
  addNewPaymentMethodAction,
  clearCartAction,
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
  addNewAddress: (address: Address) => void
  addNewPaymentMethod: (paymentMethod: PaymentMethod) => void
  clearCart: () => void
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

  function addNewAddress(address?: Address) {
    if (address) {
      dispatch(addNewAddressAction(address))
    }
  }

  function addNewPaymentMethod(paymentMethod?: PaymentMethod) {
    if (paymentMethod) {
      dispatch(addNewPaymentMethodAction(paymentMethod))
    }
  }

  function clearCart() {
    dispatch(clearCartAction())
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
        addNewAddress,
        addNewPaymentMethod,
        clearCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
