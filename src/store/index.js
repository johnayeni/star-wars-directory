import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [vuexLocalStorage.plugin],
});
