<template>
  <div class="section-menu">
    <div v-for="(menu, key) in menus" :key="key" :class="`section-menu-item ${menu.name === activeMenu ? 'active': ''}`" v-on:click="toggleMenu(menu.name)">
      <img :src="menu.icon" :alt="`${menu.name} icon`">
      <h3>{{ menu.name }}</h3>
    </div>
  </div>
</template>

<script>
import starShip from '@/assets/img/star-ship.svg';
import characters from '@/assets/img/characters.svg';
import planet from '@/assets/img/planet.svg';

export default {
  name: 'SectionMenu',
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
  },
  data() {
    return {
      menus: [
        {
          name: 'Characters',
          icon: characters,
        },
        {
          name: 'Planets',
          icon: planet,
        },
        {
          name: 'Starships',
          icon: starShip,
        },
      ],
    };
  },
  methods: {
    toggleMenu(name) {
      this.$store.commit('setActiveMenu', name);
    },
  },
};
</script>

<style>

</style>
