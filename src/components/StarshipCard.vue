<template>
  <div class="starship-card">
    <img :src="getImage()" />
    <h3>{{ starship.name }}</h3>
    <p>{{ `Model: ${starship.model}` }}</p>
    <p>{{ `Cargo Capacity: ${starship.cargo_capacity}` }}</p>
    <router-link :to="`/profile/starships/${starship.id}`">
      <h3>
        FULL DETAILS
        <span>&#62;</span>
      </h3>
    </router-link>
  </div>
</template>

<script>
import starshipImage1 from '@/assets/img/starship-1.png';
import starshipImage2 from '@/assets/img/starship-2.png';
import starshipImage3 from '@/assets/img/starship-3.png';
import { getRandomIndexFromArray } from '@/utils';

export default {
  name: 'StarshipCard',
  data() {
    return {
      images: [
        starshipImage1,
        starshipImage2,
        starshipImage3,
      ],
    };
  },
  props: {
    starship: {
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
