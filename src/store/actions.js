import { fetchData } from '@/api';

const actions = {
  async getCharacters({ commit }, page = 1) {
    commit('setFetchingCharacters', true);
    try {
      const payload = await fetchData('people', page);
      commit('setCharacters', payload);
    } catch (error) {
      window.alert(error.message);
    } finally {
      commit('setFetchingCharacters', false);
    }
  },
  async getPlanets({ commit }, page = 1) {
    commit('setFetchingStarships', true);
    try {
      const payload = await fetchData('planets', page);
      commit('setPlanets', payload);
    } catch (error) {
      window.alert(error.message);
    } finally {
      commit('setFetchingStarships', false);
    }
  },
  async getStarships({ commit }, page = 1) {
    commit('setFetchingPlanets', true);
    try {
      const payload = await fetchData('starships', page);
      commit('setStarships', payload);
    } catch (error) {
      window.alert(error.message);
    } finally {
      commit('setFetchingPlanets', false);
    }
  },
};

export default actions;
