import mutations from './mutiations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  actions,
  getters,
  mutations,
};
