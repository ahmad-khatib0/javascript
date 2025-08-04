import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // here we don't need the action because these methods will automatically be called for you
    // depending on which action was triggered.
    // NOTE: why you are mutating the state here?
    // Redux toolkit internally uses another package, called immerjs, which will detect code like this
    // and which will automatically clone the existing state, create a new state object, keep all the state
    // which we're not editing, and override the state which we are editing in an immutable way.
    // So we still have immutable code here
    // another great thing here is that we don't have to return the WHOLE object each time ,
    // but we return what is actually related to this functionality (in this case its the INCREMENTING)
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload // this payload name is not up to you
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer
