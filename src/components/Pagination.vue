<template>
  <div class="pagination">
    <p class="pagination-info">{{ pageInfo }}</p>
    <button class="prev-button" :disabled="!prev" v-on:click="goToPreviousPage()">
      <span>&#60;</span>
    </button>
    <button class="next-button" :disabled="!next" v-on:click="goToNextPage()">
      <span>&#62;</span>
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
