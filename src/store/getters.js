const getters = {
  characters: state => state.characters.list,
  planets: state => state.planets.list,
  starships: state => state.starships.list,
  charactersCount: state => state.characters.count,
  planetsCount: state => state.planets.count,
  starshipsCount: state => state.starships.count,
  charactersIsFetching: state => state.characters.fetching,
  planetsIsFetching: state => state.planets.fetching,
  starshipsIsFetching: state => state.starships.fetching,
  charactersPreviousPage: state => state.characters.previous,
  charactersNextPage: state => state.characters.next,
  planetsPreviousPage: state => state.planets.previous,
  planetsNextPage: state => state.planets.next,
  starshipsPreviousPage: state => state.starships.previous,
  starshipsNextPage: state => state.starships.next,
  activeMenu: state => state.activeMenu,
};

export default getters;
