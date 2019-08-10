<template>
  <div class="planet-card">
    <img :src="getImage()" />
    <h3>{{ planet.name }}</h3>
    <p>{{ `Population: ${planet.population}` }}</p>
    <p>{{ `Climate: ${planet.climate}` }}</p>
    <router-link :to="`/profile/planets/${planet.id}`"><h3>READ MORE<span>&#62;</span></h3></router-link>
  </div>
</template>

<script>
import planetImage1 from '@/assets/img/planet-1.png';
import planetImage2 from '@/assets/img/planet-2.png';
import planetImage3 from '@/assets/img/planet-3.png';
import { getRandomIndexFromArray } from '@/utils';

export default {
  name: 'PlanetCard',
  data() {
    return {
      images: [
        planetImage1,
        planetImage2,
        planetImage3,
      ],
    };
  },
  props: {
    planet: {
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
