<template>
  <div class="cards-container">
    <CharacterCard></CharacterCard>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard';

export default {
  name: 'Characters',
  components: {
    CharacterCard,
  },
};

</script>
