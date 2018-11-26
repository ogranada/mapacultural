<template>
  <section class="Application">
    <map-header></map-header>
    <router-view/>
  </section>
</template>

<script>

import MapHeader from '@/components/MapHeader.vue'

export default {
  name: 'App',
  components: {
    MapHeader
  }
}
</script>


<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

</style>
