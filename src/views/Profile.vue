<template>
  <div class="profile-page">
    <div class="header">
      <router-link class="back" to="/">
        <span>&#60;</span>Back
      </router-link>
      <img :src="getImage()">
      <h1>{{ name }}</h1>
    </div>
    <div class="body">
      <div v-for="(feature, index) in features" :key="index" class="feature">
        <h6>{{ feature.name | formatString }}</h6>
        <h4>{{ feature.value }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import characterImage1 from '@/assets/img/character-1.jpg';
import characterImage2 from '@/assets/img/character-2.jpg';
import characterImage3 from '@/assets/img/character-3.jpg';
import characterImage4 from '@/assets/img/character-4.jpg';
import planetImage1 from '@/assets/img/planet-1.png';
import planetImage2 from '@/assets/img/planet-2.png';
import planetImage3 from '@/assets/img/planet-3.png';
import starshipImage1 from '@/assets/img/starship-1.png';
import starshipImage2 from '@/assets/img/starship-2.png';
import starshipImage3 from '@/assets/img/starship-3.png';
import { getRandomIndexFromArray, validateObjectKeyAndValue } from '@/utils';


export default {
  name: 'Profile',
  computed: {
    list() {
      const { type } = this.$route.params;
      return this.$store.getters[type];
    },
    features() {
      const { id } = this.$route.params;
      const itemFeatures = this.list.find(obj => obj.id === id);
      return Object.entries(itemFeatures)
        .filter(validateObjectKeyAndValue)
        .map(feature => ({ name: feature[0], value: feature[1] }));
    },
    name() {
      const { id } = this.$route.params;
      const item = this.list.find(obj => obj.id === id);
      return item.name;
    },
  },
  data() {
    return {
      characterImages: [
        characterImage1,
        characterImage2,
        characterImage3,
        characterImage4,
      ],
      planetImages: [
        planetImage1,
        planetImage2,
        planetImage3,
      ],
      starshipImages: [
        starshipImage1,
        starshipImage2,
        starshipImage3,
      ],
    };
  },
  methods: {
    getImage() {
      const { type } = this.$route.params;
      switch (type) {
        case 'characters':
          return this.characterImages[getRandomIndexFromArray(this.characterImages)];
        case 'planets':
          return this.planetImages[getRandomIndexFromArray(this.planetImages)];
        case 'starships':
          return this.starshipImages[getRandomIndexFromArray(this.starshipImages)];
        default:
          return '';
      }
    },
  },
  filters: {
    formatString(str) {
      return str.toUpperCase().replace(/_/g, ' ');
    },
  },
};
</script>
