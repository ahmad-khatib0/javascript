import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

// the great thing about Redux, when using Redux toolkit, is that it's prepared for that. It does not just accept action objects
// with a type property. Instead it also does accept, action creators that return functions. And if it sees,
// that you're dispatching, an action which is actually a function, instead of action object, it will execute
// that function for you. So Redux will execute that function for you. And with that function, I mean this function here,
// ( return async (dispatch) => {} ) it will give us that dispatch argument automatically. So that in that executed function,
// we can dispatch again,
// because there's a such a common pattern that we wanna have action creators that can perform side effects.
// And that can then dispatch another actions, which eventually reached the reducers, as part of a flow off side-effects,
// or as a flow of steps that should be taken. And that's what we have here. So we can use a function
// that returns another function, as a action as well. That is built into Redux when using Redux toolkit.

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-9043f-default-rtdb.firebaseio.com/cart.json')

      console.log(response)
      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        }),
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    )

    const sendRequest = async () => {
      const response = await fetch('https://react-9043f-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      })

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      )
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      )
    }
  }
}
