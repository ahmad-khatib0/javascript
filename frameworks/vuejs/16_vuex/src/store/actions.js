export default {
  // so we use actions as middleware between components and  mutations , which allow async

  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
