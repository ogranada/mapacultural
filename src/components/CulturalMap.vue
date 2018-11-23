<template>
  <div class="CulturalMap">
    <div class="CulturalMap-map" id="CulturalMap"></div>
    <cultural-items-menu />
  </div>
</template>

<script>

import CulturalItemsMenu from '@/components/CulturalItemsMenu'

export default {
  name: "CulturalMap",
  mounted() {
    const INITIAL_POS = [6.200160191739948, -75.59358716011049];
    this.map = L.map("CulturalMap").setView(INITIAL_POS, 13);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib2dyYW5hZGEiLCJhIjoiY2puZ2ljYTg1MDNobjNrcGFlNndwOHR6ZiJ9.T4ym4ItHL-gaYd-uHmdeZQ",
      {
        maxZoom: 18,
        attribution: "Jennifer Esguerra + Juliana Aguirre",
        id: "mapbox.streets"
      }
    ).addTo(this.map);
  },
  components: {
    CulturalItemsMenu
  }
};
</script>

<style lang="scss">
.CulturalMap {
  position: relative;
  
  &-map {
    height: calc(100vh - 102px);
  }
}
</style>

