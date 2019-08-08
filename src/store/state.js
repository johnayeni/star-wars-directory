const state = {
  characters: {
    fetching: false,
    next: 1,
    previous: null,
    list: [],
    count: 0,
  },
  starships: {
    fetching: false,
    next: 1,
    previous: null,
    list: [],
    count: 0,
  },
  planets: {
    fetching: false,
    next: 1,
    previous: null,
    list: [],
    count: 0,
  },
  activeMenu: 'Characters',
};

export default state;
