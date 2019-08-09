<template>
  <div class="planet-card">
    <img :src="planetImage" />
    <h3>Alderaan</h3>
  </div>
</template>

<script>
import planetImage from '@/assets/img/planet-1.png';

export default {
  name: 'PlanetCard',
  data() {
    return {
      planetImage,
    };
  },
};
</script>
