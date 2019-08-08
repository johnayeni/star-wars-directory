import { handlePayload } from '@/utils';

const mutations = {
  setCharacters: (state, payload) => {
    state.characters = { ...handlePayload(payload) };
  },
  setStarships: (state, payload) => {
    state.starships = { ...handlePayload(payload) };
  },
  setPlanets: (state, payload) => {
    state.planets = { ...handlePayload(payload) };
  },
  setFetchingCharacters: (state, value) => {
    state.characters.fetching = value;
  },
  setFetchingStarships: (state, value) => {
    state.starships.fetching = value;
  },
  setFetchingPlanets: (state, value) => {
    state.planets.fetching = value;
  },
  setActiveMenu: (state, value) => {
    state.activeMenu = value;
  },
};

export default mutations;
