import { CartItem, CheckoutState } from './reducers'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM',
  DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM',
  CONFIRM_PURCHASE = 'CONFIRM_PURCHASE',
}

export function addItemAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function incrementCartItemAction(itemId: number) {
  return {
    type: ActionTypes.INCREMENT_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementCartItemAction(itemId: number) {
  return {
    type: ActionTypes.DECREMENT_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function confirmPurchaseAction(
  purchaseData: Omit<CheckoutState, 'cart' | 'catalog'>,
) {
  return {
    type: ActionTypes.CONFIRM_PURCHASE,
    payload: {
      purchaseData,
    },
  }
}
