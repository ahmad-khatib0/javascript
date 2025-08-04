import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CHANGE_FREQUENCY,
  TOGGLE_SUBSCRIPTION,
} from "../actions/action-types"

export default function cartReducer(state, action) {
  let newCart = [...state]
  // to get any item were perviously in the cart

  let existingIndex
  // if we're adding an item that existed in the cart

  if (action.payload) {
    existingIndex = state.findIndex(
      item => item.variant === action.payload.variant
    )
    // So the action.payload.variant would be the item we are either adding or removing from the cart.
    // So now we will know through existing index whether or not we're working with an item that was already
  }

  const saveData = cart => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  switch (action.type) {
    case ADD_TO_CART:
      if (existingIndex !== -1) {
        // so its an existed item
        let newQty = newCart[existingIndex].qty + action.payload.qty
        if (newQty > action.payload.stock) {
          newQty = action.payload.stock
          // prevent user from requesting quantity more than the existed in stock
        }
        newCart[existingIndex] = { ...newCart[existingIndex], qty: newQty }
      } else {
        newCart.push(action.payload)
      }

      saveData(newCart)
      return newCart //whatever returned from reducer ends up being the new state
    case REMOVE_FROM_CART:
      const newQty = newCart[existingIndex].qty - action.payload.qty

      if (newQty <= 0) {
        newCart = newCart.filter(
          item => item.variant !== action.payload.variant
        )
      } else {
        newCart[existingIndex] = { ...newCart[existingIndex], qty: newQty }
      }

      saveData(newCart)
      return newCart

    case CHANGE_FREQUENCY:
      newCart[existingIndex].subscription = action.payload.frequency
      saveData(newCart)
      return newCart

    case TOGGLE_SUBSCRIPTION:
      const existingSubscription = !!newCart[existingIndex].subscription

      if (existingSubscription) {
        delete newCart[existingIndex].subscription
      } else {
        newCart[existingIndex].subscription = action.payload.frequency
      }

      saveData(newCart)
      return newCart
    case CLEAR_CART:
      localStorage.removeItem("cart")
      return []
    default:
      return state
  }
}
