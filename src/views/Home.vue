<template>
  <div class="container">
    <HeroBanner>
      <div slot="content">
        <div class="flex-h-center">
          <img :src="logo" alt="star wars logo" width="150">
          <h2>Directory</h2>
        </div>
        <div class="flex-h-center">
          <p>Find your favourite Characters, Starshps and Planets.</p>
        </div>
        <SearchBar></SearchBar>
      </div>
    </HeroBanner>
    <SectionMenu></SectionMenu>
    <Characters v-if="activeMenu === 'Characters'"></Characters>
    <Planets v-if="activeMenu === 'Planets'"></Planets>
    <Starshps v-if="activeMenu === 'Starships'"></Starshps>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner';
import SearchBar from '@/components/SearchBar';
import SectionMenu from '@/components/SectionMenu';
import Planets from './Planets';
import Characters from './Characters';
import Starshps from './Starships';
import logo from '@/assets/img/logo.png';

export default {
  mounted() {
    this.$store.dispatch('getCharacters');
    this.$store.dispatch('getPlanets');
    this.$store.dispatch('getStarships');
  },
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
  },
  name: 'home',
  data() {
    return {
      logo,
    };
  },
  components: {
    HeroBanner,
    SearchBar,
    SectionMenu,
    Planets,
    Starshps,
    Characters,
  },
};
</script>
