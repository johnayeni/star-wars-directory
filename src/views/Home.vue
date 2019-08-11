<template>
  <div class="container">
    <HeroBanner></HeroBanner>
    <SectionMenu></SectionMenu>
    <Characters v-if="activeMenu === 'Characters'"></Characters>
    <Planets v-if="activeMenu === 'Planets'"></Planets>
    <Starshps v-if="activeMenu === 'Starships'"></Starshps>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner';
import SectionMenu from '@/components/SectionMenu';
import Planets from '@/components/Planets';
import Characters from '@/components/Characters';
import Starshps from '@/components/Starships';

export default {
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
  },
  name: 'home',
  components: {
    HeroBanner,
    SectionMenu,
    Planets,
    Starshps,
    Characters,
  },
};
</script>
