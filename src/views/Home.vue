<template>
  <div class="Main">
    <cultural-map/>
  </div>
</template>

<script>
// @ is an alias to /src
import CulturalMap from '@/components/CulturalMap.vue'

export default {
  name: 'home',
  components: {
    CulturalMap
  }
}
</script>
