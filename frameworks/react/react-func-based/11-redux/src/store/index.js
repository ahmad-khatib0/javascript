import { createSlice, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// calling the action is a something that redux-toolkit will do for us, for example: for the toggleCounter
// counterActions.actions.toggleCounter  will return an action object of this shape:
// {  type: 'auto-generated-unique-name-action' }

// ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier.
const store = configureStore({
  // reducer: { counter: counterSlice.reducer }, // with multiple reducers. but in this case:
  reducer: { counter: counterReducer, auth: authReducer },
})

export default store
