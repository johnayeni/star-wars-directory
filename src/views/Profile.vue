<template>
  <div class="profile-page">
    <div class="header">
      <router-link class="back" to="/"><span>&#60;</span></router-link>
      <img :src="getImage()">
      <h1>{{ name }}</h1>
    </div>
    <div class="body">
      <div v-for="(item, index) in items" :key="index" class="feature">
        <h4>{{ item[0].toUpperCase().replace("_", " ") }}</h4>
        <h3>{{ item[1] }}</h3>
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
import { getRandomIndexFromArray , isUrl } from '@/utils';




export default {
  name: 'Profile',
  computed: {
    list() {
      const { type } = this.$route.params;
      return this.$store.getters[type];
    },
    items() {
      const { id } = this.$route.params;
      const item = this.list.find(obj => obj.id === id);
      return Object.entries(item).filter((arr) => {
        const [key, value] = arr;
        return key !== 'created' && key !== 'edited' && key !== 'name' && key !== 'id' && typeof value === 'string' && !isUrl(value);
      });
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
};
</script>
