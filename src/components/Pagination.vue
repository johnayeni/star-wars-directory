<template>
  <div class="pagination">
    <p class="pagination-info">{{ pageInfo }}</p>
    <button class="prev-button" :disabled="!prev" v-on:click="goToPreviousPage()">
      &#60;
    </button>
    <button class="next-button" :disabled="!next" v-on:click="goToNextPage()">
      &#62;
    </button>
  </div>
</template>

<script>
import { generatePageInfoText } from '@/utils';

export default {
  name: 'Pagination',
  computed: {
    pageInfo() {
      return generatePageInfoText(this.prev, this.next, this.count);
    },
  },
  props: {
    next: {
      type: Number,
    },
    count: {
      type: Number,
    },
    prev: {
      type: Number,
    },
    goToNextPage: {
      type: Function,
    },
    goToPreviousPage: {
      type: Function,
    },
  },
};
</script>
