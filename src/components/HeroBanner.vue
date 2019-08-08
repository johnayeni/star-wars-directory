<template>
  <div class="hero-banner">
    <img :src="logo" class="logo" width="100">
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/img/logo-fill.png'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>
