<template>
  <div class="Main">
    <cultural-map/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CulturalMap from '@/components/CulturalMap.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    CulturalMap
  }
}
</script>
