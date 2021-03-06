<template>
  <div class="CulturalItemsMenu">
    <div class="CulturalItemsMenu-searchContainer">
      <input type="text" class="CulturalItemsMenu-search" placeholder="Search" v-model="filter">
      <button class="CulturalItemsMenu-searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <ul class="CulturalItemsMenu-items">
      <li
        class="CulturalItemsMenu-item"
        v-for="(value, key) in getValidItems"
        :key="key"
        :class="{isExpanded:isExpanded(key)}"
        >
        <div class="CulturalItemsMenu-itemContainer"
          @click="toggleExpanded(key)" >
          <img 
            class="CulturalItemsMenu-icon"
            :src="getIcon(key)"
            :alt="key">
          <span>
            {{key}}
          </span>
        </div>
        <div>
          <ul class="CulturalItemsMenu-submenu">
            <li v-for="(subvalue, subkey) in value" :key="subkey"
              >
              <div class="CulturalItemsMenu-itemContainer"
                @click="toggleExpanded(key, subkey)"
                :class="{isExpanded: isExpanded(key, subkey)}"
                >
                <img 
                  class="CulturalItemsMenu-icon"
                  :src="getIcon(key)"
                  :alt="subkey">
                <span>
                  {{subkey}}
                </span>
              </div>
              <ul
                class="CulturalItemsMenu-itemsMenu"
                :class="{isExpanded: isExpanded(key, subkey)}"
                >
                <li v-for="(finalvalue, finalkey) in getValidPlaces(subvalue)" :key="finalkey">
                  <div class="CulturalItemsMenu-placeItem"
                    @click="markerAction(finalvalue)"
                    >
                    <img class="CulturalItemsMenu-icon" :src="getIcon(finalvalue.properties.tags)" :alt="finalvalue.properties.nombre">
                    <span>{{ finalvalue.properties.nombre }}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import interact from 'interactjs';
import {toTitleCase} from '../utils.js';

export default {
  name: 'CulturalItemsMenu',
  props: ['items', 'icons', 'map', 'markers'],
  data: () => ({
    expandedItems: {},
    filter: ''
  }),
  mounted() {
    window.console.log(this.items);
    this.prepareDragAndDrop();
  },
  computed: {
    getValidItems() {
      return Object.keys(this.items)
        .filter(item => item.indexOf("__") === -1)
        .reduce((acc, item) => {
          acc[item] = this.items[item];
          return acc;
        }, {});
    },
  },
  methods: {
    getValidPlaces(values) {
      return values.filter(this.isValidByFilter);
    },
    markerAction(value){
      const lat = value.geometry.coordinates[1];
      const lng = value.geometry.coordinates[0];
      const area = toTitleCase(value.properties.area);
      const name = value.properties.nombre;
      const marker_name = `${lat}_${lng}_${area}_${name}`.replace(/\s/g,'_');
      const marker = this.markers[marker_name];
      window.console.log(marker_name);
      window.console.log(marker);
      const coords = {
        lat,
        lng
      }
      this.map.flyTo(coords, 18);
      setTimeout(() => {
        marker.openPopup();
      }, 2000);
    },
    isValidByFilter (value) {
      return value.properties.nombre
        .toLowerCase()
        .includes(this.filter.toLowerCase());
    },
    getIcon(elm) {
      return this.icons[toTitleCase(elm)];
    },
    toggleExpanded(...values){
      const value = values.map(x=>x.replace(/\s/g, '_')).join('_');
      window.console.log(value);
      const expandedItems = {...this.expandedItems};
      expandedItems[value] = !expandedItems[value];
      this.$set(this, 'expandedItems', expandedItems);
    },
    isExpanded(...values) {
      const value = values.map(x=>x.replace(/\s/g, '_')).join('_');
      return this.expandedItems[value];
    },
    prepareDragAndDrop() {
      interact(".CulturalItemsMenu").draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        /*
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      */
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: this.dragMoveListener,
        // call this function on every dragend event
        onend: function(evt) {
          var textEl = evt.target.querySelector("p");

          textEl &&
            (textEl.textContent =
              "moved a distance of " +
              Math.sqrt(
                (Math.pow(evt.pageX - evt.x0, 2) +
                  Math.pow(evt.pageY - evt.y0, 2)) |
                  0
              ).toFixed(2) +
              "px");
        }
      });
    },
    dragMoveListener(evt) {
      var target = evt.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute("data-x")) || 0) + evt.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + evt.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
  }
};
</script>

<style lang="scss">

@mixin thumb() {
  content: '';
  position: absolute;
  margin: 0;
  padding: 0;
  border-top: 4px solid black;
  border-left: 4px solid black;
  border-bottom: 4px solid transparent;
  border-right: 4px solid transparent;
  right: 5px;
  top: 24px;
  transform-origin: 2px -2px;
  transform: rotateZ(45deg) translateY(-50%);
  transition: all 0.5s ease;
  z-index: -1;
}


.CulturalItemsMenu {
  &::-webkit-scrollbar,
  & ::-webkit-scrollbar {
    width: 10px;
    border-radius: 50%;
  }
  
  & ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  
  & ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}

.CulturalItemsMenu {
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1000;
  background-color: rgba(190, 190, 190, 0.8);
  padding: 0.5em;
  border-radius: 2px;
  cursor: pointer;
  max-height: 80vh;
  overflow-y: scroll;

  &-items {
    padding: 0.5em 1em;
    margin: 0;
    list-style: none;
  }

  &-itemContainer {
    display: flex;
    align-items: center;
    position: relative;
    max-height: 48px;
  }

  &-submenu &-itemContainer {
    &::after {
      @include thumb();
    }
    &.isExpanded::after {
      transform: rotateZ(225deg) translateY(-50%);
    }
  }

  &-item {
    margin: 0;
    padding: 0;
    position: relative;
    min-height: 3em;
    line-height: 3em;

    &::after {
      @include thumb();
    }

    &.isExpanded::after {
      transform: rotateZ(225deg) translateY(-50%);
    }
    &.isExpanded {
      .CulturalItemsMenu-submenu {
        max-height: 100vh;
      }
    }

  }

  &-icon {
    width: 20px;
    height: 30px;
    margin-right: 1em; 
  }

  &-submenu {
    margin: 0;
    max-height: 0;
    transition: all 0.5s ease-out;
    overflow-y: hidden;
    list-style: none;
    padding-left: 2em;
  }

  &-itemsMenu {
    margin: 0;
    max-height: 0;
    transition: all 0.5s ease-out;
    overflow-y: hidden;
    list-style: none;

    &.isExpanded {
      max-height: 500px;
      overflow-y: scroll;
    }
  }

  &-placeItem {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &-searchContainer {
    position: relative;
    display: flex;
    justify-content: stretch;
  }
  &-searchButton {
    width: 25px;
    height: 25px;
    background: transparent;
    border: none;
  }

  &-search {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: none;
    background: transparent;
    &:focus {
      background: white;
    }
  }

}
</style>

