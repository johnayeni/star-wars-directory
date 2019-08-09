import Vue from 'vue';
import { fetchData } from '@/api';

const actions = {
  async getCharacters({ commit }, page = 1) {
    try {
      commit('setFetchingCharacters', true);
      const payload = await fetchData('people', page);
      commit('setCharacters', payload);
    } catch (error) {
      Vue.$toast.error(error.message, {
        position: 'top',
      });
    } finally {
      commit('setFetchingCharacters', false);
    }
  },
  async getPlanets({ commit }, page = 1) {
    try {
      commit('setFetchingStarships', true);
      const payload = await fetchData('planets', page);
      commit('setPlanets', payload);
    } catch (error) {
      Vue.$toast.error(error.message, {
        position: 'top',
      });
    } finally {
      commit('setFetchingStarships', false);
    }
  },
  async getStarships({ commit }, page = 1) {
    try {
      commit('setFetchingPlanets', true);
      const payload = await fetchData('starships', page);
      commit('setStarships', payload);
    } catch (error) {
      Vue.$toast.error(error.message, {
        position: 'top',
      });
    } finally {
      commit('setFetchingPlanets', false);
    }
  },
};

export default actions;
