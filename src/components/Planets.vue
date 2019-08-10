<template>
  <Loader v-if="loading"></Loader>
  <div v-else>
    <div class="cards-container">
      <PlanetCard v-for="(planet, index) in planets" :key="index" :planet="planet"></PlanetCard>
    </div>
    <Pagination :count="planetsCount" :prev="previousPage" :next="nextPage" :goToPreviousPage="goToPreviousPage" :goToNextPage="goToNextPage"></Pagination>
  </div>
</template>

<script>
import PlanetCard from '@/components/PlanetCard';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';


export default {
  name: 'Planets',
  created() {
    if (this.planets.length < 1) {
      this.$store.dispatch('getPlanets');
    }
  },
  computed: {
    planets() {
      return this.$store.getters.planets;
    },
    nextPage() {
      return this.$store.getters.planetsNextPage;
    },
    previousPage() {
      return this.$store.getters.planetsPreviousPage;
    },
    planetsCount() {
      return this.$store.getters.planetsCount;
    },
    loading() {
      return this.$store.getters.planetsIsFetching;
    },
  },
  components: {
    PlanetCard,
    Loader,
    Pagination,
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('getPlanets', { page: this.nextPage });
    },
    goToPreviousPage() {
      this.$store.dispatch('getPlanets', { page: this.previousPage });
    },
  },

};
</script>
