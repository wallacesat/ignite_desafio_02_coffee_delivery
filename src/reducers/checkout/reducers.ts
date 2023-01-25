import { produce } from 'immer'

import { catalog } from './data'
import { ActionTypes } from './actions'

export type PaymentMethod = 'credit' | 'debit' | 'money'

export type CoffeeTags =
  | 'Tradicional'
  | 'Gelado'
  | 'Com leite'
  | 'Especial'
  | 'Alcoólico'

export type CartItem = {
  id: number
  title: string
  description: string
  price: number
  tags: CoffeeTags[]
  imgUrl: string
  amount: number
}

export type Address = {
  cep: number
  street: string
  number: string
  complement?: string
  district: string
  city: string
  state: string
}

export type CartType = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  deliveryPrice: number
}

export interface CheckoutState {
  cart: CartType
  catalog: CartItem[]
  address: Address | null
  paymentMethod: PaymentMethod | null
}

export const initialCheckoutState: CheckoutState = {
  cart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    deliveryPrice: 0,
  },
  catalog,
  address: null,
  paymentMethod: null,
}

export function checkoutReducer(state: CheckoutState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const newItem = action.payload.item as CartItem

      return produce(state, (draft) => {
        const itemIndex = draft.cart.items.findIndex(
          (cartItem) => cartItem.id === newItem.id,
        )

        if (itemIndex < 0) {
          draft.cart.items.push(newItem)
        } else {
          draft.cart.items[itemIndex].amount += newItem.amount
        }

        draft.cart.totalItems += newItem.amount
        draft.cart.totalPrice += newItem.amount * newItem.price
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemIdToRemove = action.payload.itemId as number

      const itemIndexToRemove = state.cart.items.findIndex(
        (cartItem) => cartItem.id === itemIdToRemove,
      )

      if (itemIndexToRemove < 0) {
        return state
      }

      return produce(state, (draft) => {
        const qtdItemsToBeRemoved = draft.cart.items[itemIndexToRemove].amount
        draft.cart.totalItems -= draft.cart.items[itemIndexToRemove].amount
        draft.cart.totalPrice -=
          qtdItemsToBeRemoved * draft.cart.items[itemIndexToRemove].price

        draft.cart.items.splice(itemIndexToRemove, 1)
      })
    }

    case ActionTypes.INCREMENT_CART_ITEM: {
      const itemIdToIncrement = action.payload.itemId as number

      const itemIndexToIncrement = state.cart.items.findIndex(
        (cartItem) => cartItem.id === itemIdToIncrement,
      )

      if (itemIndexToIncrement < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart.items[itemIndexToIncrement].amount += 1
        draft.cart.totalItems += 1
        draft.cart.totalPrice += draft.cart.items[itemIndexToIncrement].price
      })
    }

    case ActionTypes.DECREMENT_CART_ITEM: {
      const itemIdToDecrement = action.payload.itemId as number

      const itemIndexToDecrement = state.cart.items.findIndex(
        (cartItem) => cartItem.id === itemIdToDecrement,
      )

      if (
        itemIndexToDecrement < 0 ||
        state.cart.items[itemIndexToDecrement].amount < 2
      ) {
        return state
      }

      return produce(state, (draft) => {
        draft.cart.items[itemIndexToDecrement].amount -= 1
        draft.cart.totalItems -= 1
        draft.cart.totalPrice -= draft.cart.items[itemIndexToDecrement].price
      })
    }

    default:
      return state
  }
}
