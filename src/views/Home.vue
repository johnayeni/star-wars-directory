<template>
  <div class="container">
    <HeroBanner>
      <div slot="content">
        <div class="flex-h-center">
          <img :src="logo" alt="star wars logo" width="150">
          <h3>Directory</h3>
        </div>
        <p>Find you favourite Characters, planets and starships of the Starwars universe.</p>
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
import Planets from '@/components/Planets';
import Characters from '@/components/Characters';
import Starshps from '@/components/Starships';
import logo from '@/assets/img/logo.png';

export default {
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
