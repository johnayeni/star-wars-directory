<template>
  <form class="flex-h-center">
    <input class="search-bar" v-model="searchValue" :placeholder="`Search for ${activeMenu}...`" aria-label="Search bar">
    <button type="submit" class="search-button" @click="search">
      Go
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
  },
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    search(e) {
      if (e) e.preventDefault();
      switch (this.activeMenu) {
        case 'Characters':
          this.$store.dispatch('getCharacters', { search: this.searchValue });
          break;
        case 'Planets':
          this.$store.dispatch('getPlanets', { search: this.searchValue });
          break;
        case 'Starships':
          this.$store.dispatch('getStarships', { search: this.searchValue });
          break;
        default:
          this.$toast.info('Invalid operation');
      }
    },
  },
  watch: {
    activeMenu(oldValue, newValue) {
      if (oldValue !== newValue && this.searchValue) {
        // this.search();
        this.searchValue = '';
      }
    },
  },
};
</script>
