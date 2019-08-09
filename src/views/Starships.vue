<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="cards-container">
        <StarshipCard v-for="(starship, index) in starships" :key="index" :starship="starship"></StarshipCard>
      </div>
      <Pagination :count="starshipsCount" :prev="previousPage" :next="nextPage" :goToPreviousPage="goToPreviousPage" :goToNextPage="goToNextPage"></Pagination>
    </div>
  </div>
</template>

<script>
import StarshipCard from '@/components/StarshipCard';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';

export default {
  name: 'Starships',
  beforeMount() {
    if (this.starships.length < 1) {
      this.$store.dispatch('getStarships');
    }
  },
  computed: {
    starships() {
      return this.$store.getters.starships;
    },
    nextPage() {
      return this.$store.getters.starshipsNextPage;
    },
    previousPage() {
      return this.$store.getters.starshipsPreviousPage;
    },
    starshipsCount() {
      return this.$store.getters.starshipsCount;
    },
    loading() {
      return this.$store.getters.starshipsIsFetching;
    },
  },
  components: {
    StarshipCard,
    Loader,
    Pagination,
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('getStarships', this.nextPage);
    },
    goToPreviousPage() {
      this.$store.dispatch('getStarships', this.previousPage);
    },
  },
};
</script>
