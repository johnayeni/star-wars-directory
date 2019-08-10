<template>
  <div>
    <div class="flex-h-center">
      <h3>NO RESULTS</h3>
    </div>
    <div class="flex-h-center">
      <button class="refresh-button" v-on:click="refresh()">
        ↻
      </button>
    </div>
  </div>
</template>

<script >
export default {
  name: 'EmptyPlaceHolder',
  props: {
    refresh: {
      type: Function,
    },
  },
};
</script>
