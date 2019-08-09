<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="cards-container">
        <CharacterCard v-for="(character, index) in characters" :key="index" :character="character"></CharacterCard>
      </div>
      <Pagination :count="charactersCount" :prev="previousPage" :next="nextPage" :goToPreviousPage="goToPreviousPage" :goToNextPage="goToNextPage"></Pagination>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';

export default {
  name: 'Characters',
  beforeMount() {
    if (this.characters.length < 1) {
      this.$store.dispatch('getCharacters');
    }
  },
  computed: {
    characters() {
      return this.$store.getters.characters;
    },
    nextPage() {
      return this.$store.getters.charactersNextPage;
    },
    previousPage() {
      return this.$store.getters.charactersPreviousPage;
    },
    charactersCount() {
      return this.$store.getters.charactersCount;
    },
    loading() {
      return this.$store.getters.charactersIsFetching;
    },
  },
  components: {
    CharacterCard,
    Loader,
    Pagination,
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('getCharacters', this.nextPage);
    },
    goToPreviousPage() {
      this.$store.dispatch('getCharacters', this.previousPage);
    },
  },
};

</script>
