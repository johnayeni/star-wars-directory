<template>
  <div class="character-card">
    <div class="character-card-head">
      <img :src="personImage">
    </div>
    <div class="character-card-body">
      <h3>Luke Skywalker</h3>
      <p>Born: 17th May 1990</p>
      <p>Male</p>
    </div>
  </div>
</template>
<script>
import personImage from '@/assets/img/character-1.jpg';

export default {
  name: 'CharacterCard',
  data() {
    return {
      personImage,
    };
  },
};
</script>
