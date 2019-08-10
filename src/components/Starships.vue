<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div v-if="starships.length > 0">
        <div class="cards-container">
          <StarshipCard
            v-for="(starship, index) in starships"
            :key="index"
            :starship="starship"
          >
          </StarshipCard>
        </div>
        <Pagination
          :count="starshipsCount"
          :prev="previousPage"
          :next="nextPage"
          :goToPreviousPage="goToPreviousPage"
          :goToNextPage="goToNextPage"
        >
        </Pagination>
      </div>
      <EmptyPlaceHolder v-else :refresh="refresh"></EmptyPlaceHolder>
    </div>
  </div>
</template>

<script>
import StarshipCard from '@/components/StarshipCard';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder';

export default {
  name: 'Starships',
  created() {
    if (this.starships.length < 1) {
      this.$store.dispatch('getStarships', { page: 1 });
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
    EmptyPlaceHolder,
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('getStarships', { page: this.nextPage });
    },
    goToPreviousPage() {
      this.$store.dispatch('getStarships', { page: this.previousPage });
    },
    refresh() {
      this.$store.dispatch('getStarships', { page: 1 });
    },
  },
};
</script>
