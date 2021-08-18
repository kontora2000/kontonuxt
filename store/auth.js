
export const state = () => ({
  isLogin: false,
  user: null,
});

export const mutations = {
  SET_IS_LOGIN (state, value) {
    state.isLogin = value;
  },
  SET_USER (state, user) {
    state.user = user;
  },
};

export const actions = {
  async login ({ commit, }, { email, password, }) {
    try {
      const user = await this.$fire.auth.signInWithEmailAndPassword(email, password);
      commit('SET_IS_LOGIN', true);
      commit('SET_USER', user); 
    } catch (e) {
      console.error(e);
    }
  },
  logout ({ commit, }) {
    commit('SET_IS_LOGIN', false);
    commit('SET_USER', null);
  },

};

export const getters = {
  isLoggedIn: state => state.isLogin,
};
