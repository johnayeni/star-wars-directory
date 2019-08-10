import Vue from 'vue';
import { fetchData } from '@/api';

const actions = {
  async getCharacters({ commit }, { page = 1, search = '' }) {
    try {
      commit('setFetchingCharacters', true);
      const payload = await fetchData('people', page, search);
      commit('setCharacters', payload);
      if (search) {
        const { count } = payload;
        Vue.$toast.info(`${count} result(s) found`);
      }
    } catch (error) {
      Vue.$toast.error(error.message);
    } finally {
      commit('setFetchingCharacters', false);
    }
  },
  async getPlanets({ commit }, { page = 1, search = '' }) {
    try {
      commit('setFetchingPlanets', true);
      const payload = await fetchData('planets', page, search);
      commit('setPlanets', payload);
      if (search) {
        const { count } = payload;
        Vue.$toast.info(`${count} result(s) found`);
      }
    } catch (error) {
      Vue.$toast.error(error.message);
    } finally {
      commit('setFetchingPlanets', false);
    }
  },
  async getStarships({ commit }, { page = 1, search = '' }) {
    try {
      commit('setFetchingStarships', true);
      const payload = await fetchData('starships', page, search);
      commit('setStarships', payload);
      if (search) {
        const { count } = payload;
        Vue.$toast.info(`${count} result(s) found`);
      }
    } catch (error) {
      Vue.$toast.error(error.message);
    } finally {
      commit('setFetchingStarships', false);
    }
  },
};

export default actions;
