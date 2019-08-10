<template>
  <div class="character-card">
    <img :src="getImage()">
    <h4>{{ character.name }}</h4>
    <p>{{ `Birth year: ${character.birth_year}` }}</p>
    <p>{{ `Gender: ${character.gender}`  }}</p>
    <router-link :to="`/profile/characters/${character.id}`">
      <h3>
        FULL DETAILS
        <span>&#62;</span>
      </h3>
    </router-link>
  </div>
</template>
<script>
import personImage1 from '@/assets/img/character-1.jpg';
import personImage2 from '@/assets/img/character-2.jpg';
import personImage3 from '@/assets/img/character-3.jpg';
import personImage4 from '@/assets/img/character-4.jpg';
import { getRandomIndexFromArray } from '@/utils';

export default {
  name: 'CharacterCard',
  data() {
    return {
      images: [
        personImage1,
        personImage2,
        personImage3,
        personImage4,
      ],
    };
  },
  props: {
    character: {
      type: Object,
    },
  },
  methods: {
    getImage() {
      return this.images[getRandomIndexFromArray(this.images)];
    },
  },

};
</script>
