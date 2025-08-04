export default {
  finalCounter(state) {
    return state.counter * 3;
  },
  // anExample(state, getters, rootState, rootGetters) {
  //   // here we can to reach out to main store by 3th and 4th args
  //   console.log(state, getters, rootState, rootGetters);
  //   return state.counter * 3;
  // },
  normalizeCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  },
};
