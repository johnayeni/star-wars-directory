<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="filter">
        <label>Gender</label>
        <select v-model="filter">
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="robot">Robot</option>
        </select>
      </div>
      <div v-if="characters.length > 0">
        <div class="cards-container">
          <div v-for="(character, index) in characters" :key="index">
            <CharacterCard
              v-if="filter === 'all' || character.gender === filter"
              :character="character"
            >
            </CharacterCard>
          </div>
        </div>
        <Pagination
          :count="charactersCount"
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
import CharacterCard from '@/components/CharacterCard';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder';

export default {
  name: 'Characters',
  created() {
    if (this.characters.length < 1) {
      this.$store.dispatch('getCharacters', { page: 1 });
    }
  },
  data() {
    return {
      filter: 'all',
    };
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
    EmptyPlaceHolder,
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch('getCharacters', { page: this.nextPage });
    },
    goToPreviousPage() {
      this.$store.dispatch('getCharacters', { page: this.previousPage });
    },
    refresh() {
      this.$store.dispatch('getCharacters', { page: 1 });
    },
  },
};

</script>
