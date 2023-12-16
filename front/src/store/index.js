// front/src/store/index.js
import { createApp } from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


const app = createApp({});
app.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      // Use the Axios instance from Vue
      return this._vm.axios.post('http://localhost:3991/login', { email, password })
        .then(response => {
          commit('setUser', response.data.user);
          commit('setAuthentication', true);
          return response.data;
        });
    },
    logout({ commit }) {
      // Make a POST request to your logout endpoint in the backend
      return axios.post('http://localhost:3991/logout')
        .then(() => {
          commit('setUser', null);
          commit('setAuthentication', false);
        });
    },
  },
});
