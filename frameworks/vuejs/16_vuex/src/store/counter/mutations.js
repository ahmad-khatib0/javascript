export default {
  increment(state) {
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    console.log(state); //because its locale state, will'll not see the isLoggedIn
    // payload can be anything , obj,string,num,....
    state.counter = state.counter + payload.value;
  },
};
