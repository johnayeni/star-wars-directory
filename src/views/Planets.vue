<template>
  <div class="cards-container">
    <PlanetCard></PlanetCard>
  </div>
</template>

<script>
import PlanetCard from '@/components/PlanetCard';

export default {
  name: 'Planets',
  components: {
    PlanetCard,
  },
};
</script>
