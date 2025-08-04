import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import counterModule from './counter/index';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  // to merge the above obj into the store
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  // the idea behind mutations , is when we wanna change the state directly in many places , eg if
  // we decide to edit this changing , we wanna go to all places and edit them , to be consistent
  // in all places , so in big projects this pattern would be a nightmare
  // mutations doesn't allow async
  actions: rootActions,
  getters: rootGetters,
});

export default store;
