<template>
  <div class="hero-banner">
    <img :src="logoFill" class="logo" width="100" alt="star wars logo">
    <div class="content">
      <div class="flex-h-center">
        <img :src="logo" alt="star wars logo" width="150">
        <h3>Directory</h3>
      </div>
      <p>Find you favourite Characters, planets and starships of the Starwars universe.</p>
      <SearchBar></SearchBar>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import logo from '@/assets/img/logo.png';
import logoFill from '@/assets/img/logo-fill.png';

export default {
  name: 'HeroBanner',
  components: {
    SearchBar,
  },
  data() {
    return {
      logo,
      logoFill,
    };
  },
};
</script>
